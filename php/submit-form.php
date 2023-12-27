<?php
//! Required: Main variables (Your email address, name, upload directory)
$admin_email = 'superfoxsaga.id@gmail.com'; // Change this with your email
$admin_email_cc = ''; // Change this with other email that you want to receive a copy
$admin_name = 'Super Admin'; // Change this with your name
$site_name = $_SERVER['HTTP_HOST']; // Dynamically get site name
$upload_dir = 'uploads/documents'; // Change this with your upload directory name (If your form has file upload)

//! Required: Replace this variable with your custom attribute name (Form fields)
$an_send_copy = 'an-send-copy'; // Change this with your custom send-copy acceptance checkbox name
$an_submit = 'an-submit'; // Change this with your custom submit button name

// * Optional: Replace this variable with your Google Sheets Data
$an_gsheet_url = ''; // Change this with your Google Sheets URL
$an_gsheet_sheet_name = ''; // Change this with your Google Sheets target sheet name
$an_gsheet_sheet_id = ''; // Change this with your Google Sheets target sheet id

// If form is submitted
if (isset($_POST[$an_submit])) {
    //! If bot are filled, die and reload page
    if(isset($_POST['bot']) && !empty($_POST['bot'])){
        // Die and reload current page
        die(header("Location: " . $_SERVER['REQUEST_URI']));
    }

    $timestamp = date('j F Y, H:i:s', strtotime('+7 hours')); // Change this with your timezone GMT
    // Get values from form
    $values = array();
    $senderName = 'name';
    $valueName = $senderName;
    $senderEmail = 'email';
    foreach ($_POST as $key => $value) {
        if ($key != $an_submit && $key != 'bot' && $key != $an_send_copy && $key != 'g-recaptcha-response') {
            // Check if value is array
            if (is_array($value)) {
                $values[$key] = implode(', ', $value);
            } else {
                $values[$key] = $value;
            }
            // Replace empty value with '-'
            if (empty($values[$key])) {
                $values[$key] = '-';
            }
            // Check if $values contains 'name' key with strpos
            if (strpos($key, $senderName) !== false) {
                $senderName = $key;
            }
            // Check if $values contains 'email' key with strpos
            if (strpos($key, $senderEmail) !== false) {
                $senderEmail = $key;
            }
        }
    }

    // Check if form has file upload
    if (isset($_FILES) && !empty($_FILES)) {
        // $base_url = $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST']; // Dynamically get base URL
        // Check if upload directory is not empty
        if (!empty($upload_dir)) {
            $base_dir = $_SERVER['DOCUMENT_ROOT']; // Dynamically get base directory
            // Combine base directory with upload directory. Check if base directory is not empty
            if (!empty($base_dir)) {
                $upload_dir = $base_dir . '/' . $upload_dir;
            } else {
                $upload_dir = $upload_dir;
            }
            // Check if upload directory doesn't have slash at the end
            if (substr($upload_dir, -1) != '/') {
                $upload_dir = $upload_dir . '/';
            }
            // Check if upload directory doesn't have slash at the end
            if (substr($upload_dir, -1) != '/') {
                $upload_dir = $upload_dir . '/';
            }
            // Check if upload directory is exist
            if (!file_exists($upload_dir)) {
                mkdir($upload_dir, 0755, true); // 0755 means that only owner has full access, group and others can read and execute
            }
            // If path is localhost directory, replace localhost with base URL
            $base_url = $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST']; // Dynamically get base URL
            // Example: {F:/laragon/www/website/}{uploads/}{2020-01-01-1577836800.jpg} => {https://website.com/}{uploads/}{2020-01-01-1577836800.jpg}
            // Loop through $_FILES
            foreach ($_FILES as $key => $value) {
                // Check if file is uploaded
                if (isset($_FILES[$key]['tmp_name']) && !empty($_FILES[$key]['tmp_name'])) {
                    $file_name = $_FILES[$key]['name'];
                    $file_tmp = $_FILES[$key]['tmp_name'];
                    $file_size = $_FILES[$key]['size'];
                    $file_type = $_FILES[$key]['type'];
                    $file_ext = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
                    $file_name = strtolower(pathinfo($file_name, PATHINFO_FILENAME));
                    $file_name = preg_replace('/[^A-Za-z0-9\-]/', '', $file_name);
                    $file_name = preg_replace('/-+/', '-', $file_name);
                    $file_name = trim($file_name, '-');
                    // Check if 'name' is set and not empty
                    if (isset($values[$senderName]) && !empty($values[$senderName])) {
                        // Remove space and replace with dash to lowercase
                        $values[$senderName] = strtolower(str_replace(' ', '-', $values[$senderName]));
                        $file_name = $values[$senderName] . '-' . $file_name;
                    }
                    $file_name = $file_name . '-' . time() . '.' . $file_ext;
                    $file_path = $upload_dir . $file_name;
                    // Check if file is not exist
                    if (!file_exists($file_path)) {
                        // Upload file
                        move_uploaded_file($file_tmp, $file_path);
                        // Add file path to $values with full URL
                        $values[$key] = $file_path;
                    }
                }
            }
        }
    }

    //* Google Sheets
    // $response = ''; // Default response
    // Check if $an_gsheet_url, $an_gsheet_sheet_name, $an_gsheet_sheet_id are not empty
    if (!empty($an_gsheet_url) || !empty($an_gsheet_sheet_name) || !empty($an_gsheet_sheet_id)) {
        // // Save to Google Sheets
        // $sheetUrl = $an_gsheet_url;
        // $sheetUrl .= '?sheetID=' . $an_gsheet_sheet_id; // This is hidden input field with value of sheet id
        // $sheetUrl .= '&sheetName=' . $an_gsheet_sheet_name; // This is hidden input field with value of sheet name
        // foreach ($values as $key => $value) {
        //     // Remove prefix 'an-' from key
        //     $key = str_replace('an-', '', $key);
        //     $sheetUrl .= '&' . $key . '=' . $value; // Example: &name=John Doe
        // }
        // // Make valid URL
        // $sheetUrl = str_replace(' ', '%20', $sheetUrl);
        // // Send data to Google Sheets
        // $response = file_get_contents($sheetUrl);

        // Save to Google Sheets - POST request
        $sheetUrl = $an_gsheet_url;
        $data = array(
            'sheetID' => $an_gsheet_sheet_id, // This is hidden input field with value of sheet id
            'sheetName' => $an_gsheet_sheet_name, // This is hidden input field with value of sheet name
        );
        foreach ($values as $key => $value) {
            // If key contain "an_exclude_" or "an_exclude-", get only key without "an_exclude_" or "an_exclude-"
            if (strpos($key, 'an_exclude_') !== false) {
                $key = str_replace('an_exclude_', '', $key);
            }
            if (strpos($key, 'an_exclude-') !== false) {
                $key = str_replace('an_exclude-', '', $key);
            }
            // Remove prefix 'an-' from key
            $key = str_replace('an-', '', $key);
            $data[$key] = $value; // Example: name=John Doe
            if ($key == $valueName) {
                $data[$key] = $_POST[$valueName];
            }
        }
        // Add timestamp
        $data['timestamp'] = $timestamp;
        // Create POST request - Query string
        $options = array(
            'http' => array(
                'header' => "Content-type: application/x-www-form-urlencoded\r\n",
                'method' => 'POST',
                'content' => http_build_query($data)
            )
        );
        // Send data to Google Sheets
        $context = stream_context_create($options);
        $response = file_get_contents($sheetUrl, false, $context);

        // // Create POST request - JSON
        // $data = array('parameter' => $data);
        // $data = json_encode($data);
        // // Send data to Google Sheets
        // $response = file_get_contents($sheetUrl, false, stream_context_create(array(
        //     'http' => array(
        //         'method' => 'POST',
        //         'header' => 'Content-Type: application/json' . "\r\n",
        //         'content' => $data
        //     )
        // )));
    }

    //* Send email to admin
    $to = $admin_email; // This is hidden input field with value of email address
    $cc = $admin_email_cc;
    $subject = 'Hi' . ' ' . $admin_name . ', you have a new message from your website';
    $message = '<html><body>';
    $message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
    foreach ($values as $key => $value) {
        // If key contain "an_exclude_" or "an_exclude-", get only key without "an_exclude_" or "an_exclude-"
        if (strpos($key, 'an_exclude_') !== false) {
            $key = str_replace('an_exclude_', '', $key);
        }
        if (strpos($key, 'an_exclude-') !== false) {
            $key = str_replace('an_exclude-', '', $key);
        }
        // Remove prefix 'an-' from key
        $key = str_replace('an-', '', $key);
        // Replace _ or - with space
        $key = str_replace('_', ' ', $key);
        $key = str_replace('-', ' ', $key);
        // If is senderName, Get the POST Value
        if ($key == $valueName) {
            $value = $_POST[$valueName];
        }
        $message .= "<tr style='background: #eee;'><td><strong>" . ucfirst($key) . ":</strong> </td><td>" . $value . "</td></tr>";
    }
    $message .= "<tr><td><strong>Timestamp:</strong> </td><td>" . $timestamp . "</td></tr>";
    $message .= "</table>";
    $message .= "<p>This message was sent from your website's contact form.</p>";
    $message .= "<p>IP Address: " . $_SERVER['REMOTE_ADDR'] . "</p>";
    $message .= "<p>Browser: " . $_SERVER['HTTP_USER_AGENT'] . "</p>";
    $message .= "<p>Referer: " . $_SERVER['HTTP_REFERER'] . "</p>";
    if (!empty($an_gsheet_url) || !empty($an_gsheet_sheet_name) || !empty($an_gsheet_sheet_id)) {
        // Check if $response is not empty
        if (!empty($response)) {
            $message .= "<p>Google Sheets Response: " . $response . "</p>";
        } else {
            $message .= "<p>Google Sheets Response: Failed to send data to Google Sheets.</p>";
        }
    }
    $message .= "</body></html>";
    // Check if $values has email field
    if (isset($values[$senderEmail]) && !empty($values[$senderEmail]) && filter_var($values[$senderEmail], FILTER_VALIDATE_EMAIL)) {
        $headers = "From: " . $values[$senderEmail] . "\r\n";
        $headers .= "Reply-To: " . $values[$senderEmail] . "\r\n";
    } else {
        $headers = "From: " . $to . "\r\n";
        $headers .= "Reply-To: " . $to . "\r\n";
    }
    if (!empty($cc)) {
        $headers .= "Cc: " . $cc . "\r\n";
    }
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    mail($to, $subject, $message, $headers);

    //* Send email to sender
    // Check if $values has an-send-copy field and it's checked via value 1
    if (isset($_POST[$an_send_copy]) && $_POST[$an_send_copy] == 1) {
        if (isset($values[$senderEmail]) && !empty($values[$senderEmail]) && filter_var($values[$senderEmail], FILTER_VALIDATE_EMAIL)) {
            $tosender = $values[$senderEmail];
            $subject = 'Thank you for contacting us';
            $message = '<html>';
            $message .= '<head>';
            $message .= '<title>Thank you for contacting us</title>';
            $message .= '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />';
            $message .= '<meta name="viewport" content="width=device-width, initial-scale=1.0"/>';
            $message .= '<style type="text/css">';
            $message .= 'body {font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height: 1.6em; color: #000;}';
            $message .= 'table {border-collapse: collapse;}';
            $message .= 'table td {border: 1px solid #ddd; padding: 10px;}';
            $message .= '</style>';
            $message .= '</head>';
            $message .= '<body>';
            if (isset($values[$senderName]) && !empty($values[$senderName])) {
                $message .= '<p>Hi ' . $_POST[$valueName] . ',</p>';
            } else {
                $message .= '<p>Hi,</p>';
            }
            $message .= '<p>Thank you for contacting us. We will get back to you as soon as possible.</p>';
            $message .= '<p>Below is a copy of your message:</p>';
            $message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
            foreach ($values as $key => $value) {
                // If key contain "an_exclude_" or "an_exclude-", skip it
                if (strpos($key, 'an_exclude_') !== false) {
                    continue;
                }
                if (strpos($key, 'an_exclude-') !== false) {
                    continue;
                }
                // Remove prefix 'an-' from key
                $key = str_replace('an-', '', $key);
                // Replace _ or - with space
                $key = str_replace('_', ' ', $key);
                $key = str_replace('-', ' ', $key);
                if ($key == $valueName) {
                    $value = $_POST[$valueName];
                }
                $message .= "<tr style='background: #eee;'><td><strong>" . ucfirst($key) . ":</strong> </td><td>" . $value . "</td></tr>";
            }
            $message .= "<tr><td><strong>Timestamp:</strong> </td><td>" . $timestamp . "</td></tr>";
            $message .= "</table>";
            $message .= "<p>This message was sent from " . $site_name . " website's form.</p>";
            $message .= "<p>Best regards,</p>";
            $message .= "<p style='font-weight: bold;'>" . $admin_name . "</p>";
            $message .= "</body></html>";
            $headers = "From: " . $to . "\r\n";
            $headers .= "Reply-To: " . $to . "\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
            mail($tosender, $subject, $message, $headers);
        }
    }

    //* Redirect to current page
    header("Location: " . $_SERVER['REQUEST_URI']);
    exit;
}

// Credentials Download
$an_credential = 'an-credential';
$file_credential = 'https://awpdesigns.github.io/superfox/uploads/SUPERFOX-SAGA---CREDENTIAL-2023-Share.pdf'; // Superfox Credential File
// If form is submitted
if (isset($_POST[$an_credential])) {
    //! If bot are filled, die and reload page
    if(isset($_POST['bot']) && !empty($_POST['bot'])){
        // Die and reload current page
        die(header("Location: " . $_SERVER['REQUEST_URI']));
    }
    // Get values from form
    $values = array();
    foreach ($_POST as $key => $value) {
        if ($key != $an_credential && $key != 'bot' && $key != 'g-recaptcha-response') {
            // Check if value is array
            if (is_array($value)) {
                $values[$key] = implode(', ', $value);
            } else {
                $values[$key] = $value;
            }
            // Replace empty value with '-'
            if (empty($values[$key])) {
                $values[$key] = '-';
            }
        }
    }
    // Download file
    // Check if file exists
    if (file_exists($file_credential)) {
        $file_name = basename($file_credential);
        // Download file
        header("Content-Description: File Transfer");
        header("Content-Type: application/octet-stream");
        header("Content-Disposition: attachment; filename=" . $file_name);
        header("Expires: 0");
        header("Cache-Control: must-revalidate");
        header("Pragma: public");
        header("Content-Length: " . filesize($file_credential));
        readfile($file_credential);
        exit;
        // // Curl download
        // $ch = curl_init();
        // curl_setopt($ch, CURLOPT_URL, $file_credential);
        // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        // curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        // $data = curl_exec($ch);
        // curl_close($ch);
        // // Set headers
        // header('Content-Type: application/pdf');
        // header('Content-Disposition: attachment; filename="' . $file_name . '"');
        // header('Content-Length: ' . strlen($data));
        // // Output file
        // echo $data;
        // exit;
    }

    //* Redirect to current page
    header("Location: " . $_SERVER['REQUEST_URI']);
    exit;

}