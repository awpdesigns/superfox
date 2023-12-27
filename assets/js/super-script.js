$.getScript('/assets/atasnalar-bootstrap/js/bootstrap.bundle.min.js');
// Check if jquery-form plugin is not exist in this page
if (typeof jQuery.fn.ajaxForm === 'undefined') {
    // Import jquery-form plugin
    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.3.0/jquery.form.min.js');
}

// Fix jQuery to support passive event
jQuery.event.special.touchstart = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
jQuery.event.special.touchmove = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
jQuery.event.special.wheel = {
    setup: function( _, ns, handle ){
        this.addEventListener("wheel", handle, { passive: true });
    }
};
jQuery.event.special.mousewheel = {
    setup: function( _, ns, handle ){
        this.addEventListener("mousewheel", handle, { passive: true });
    }
};

/* ======== Window Resizing Breakpoint ======== */
var smMax = window.matchMedia('(max-width: 575.98px)');
var mdMax = window.matchMedia('(max-width: 767.98px)');
var lgMax = window.matchMedia('(max-width: 991.98px)');
var xlMax = window.matchMedia('(max-width: 1199.98px)');
var xxlMax = window.matchMedia('(max-width: 1399.98px)');
var smMin = window.matchMedia('(min-width: 576px)');
var mdMin = window.matchMedia('(min-width: 768px)');
var lgMin = window.matchMedia('(min-width: 992px)');
var xlMin = window.matchMedia('(min-width: 1200px)');
var xxlMin = window.matchMedia('(min-width: 1400px)');

/*=================================================================
    Element on Viewport
==================================================================*/
//^ Function to check if element is in viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect() || el.get(0).getBoundingClientRect();
    // return (
    //     rect.top >= 0 &&
    //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    // );
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/*=================================================================
    File Existance Checker
==================================================================*/
function fileExists(url) {
    // Use async
    var http = new XMLHttpRequest();
    http.open('HEAD', url, true);
    http.send();
    return http.status !== 404;
}
/*=================================================================
    Swup Functions
==================================================================*/
const swup = new Swup({
    animateHistoryBrowsing: false,
    animationSelector: '[class*="transition-"]',
    animationScope: 'html',
    cache: true,
    containers: ['#swup', '#menu-header-menu', '#super-footer'],
    ignoreVisit: (url, { el } = {}) => el?.closest('[data-no-swup]'),
    linkSelector: 'a[href]',
    linkToSelf: 'scroll',
    native: false,
    plugins: [],
    resolveUrl: (url) => url,
    requestHeaders: {
        'X-Requested-With': 'swup',
        'Accept': 'text/html, application/xhtml+xml'
    },
    skipPopStateHandling: (event) => event.state?.source !== 'swup',
    timeout: 0
});

(function ($) {
    'use strict';

    var prefix = document.querySelector('html').getAttribute('data-prefix') || '';
    var lang = $('html').attr('lang') || 'en';
    var direction = $('html').attr('dir') || 'ltr';
    var getMode = localStorage.getItem('mode') || $('html').attr('data-theme') || 'light';

    /*=================================================================
        Window Load Functions
    ==================================================================*/
    $(window).on('load', function () {
        /* ======== Preloader ======== */
        $('.preloader').fadeOut( function () {
            $(this).remove();
        });
        // Remove all localStorage
        // localStorage.clear();
    });

    /* ======== Window Resizing Breakpoint ======== */
    var smMax = window.matchMedia('(max-width: 575.98px)');
    var mdMax = window.matchMedia('(max-width: 767.98px)');
    var lgMax = window.matchMedia('(max-width: 991.98px)');
    var xlMax = window.matchMedia('(max-width: 1199.98px)');
    var xxlMax = window.matchMedia('(max-width: 1399.98px)');
    var smMin = window.matchMedia('(min-width: 576px)');
    var mdMin = window.matchMedia('(min-width: 768px)');
    var lgMin = window.matchMedia('(min-width: 992px)');
    var xlMin = window.matchMedia('(min-width: 1200px)');
    var xxlMin = window.matchMedia('(min-width: 1400px)');
    function Breakpoint() {
        // If window max-width 575.98px
        if (smMax.matches) {
        } else {
        }
        // If window max-width 767.98px
        if (mdMax.matches) {
        }
        // If window max-width 991.98px
        if (lgMax.matches) {
        } else {
        }
        // If window max-width 1199.98px
        if (xlMax.matches) {
        }
        // If window max-width 1399.98px
        if (xxlMax.matches) {
        }
        // If window min-width 576px
        if (smMin.matches) {
        }
        // If window min-width 768px
        if (mdMin.matches) {
        }
        // If window min-width 992px
        if (lgMin.matches) {
        }
        // If window min-width 1200px
        if (xlMin.matches) {
        }
        // If window min-width 1400px
        if (xxlMin.matches) {
        }
    }

    /*=================================================================
        Super Script | Document Ready Functions
    ==================================================================*/
    var SuperScript = function () {
    };

    // Document Ready
    $(document).ready(function () {
        SuperScript();
    });

    /*=================================================================
        Window Load & Resize Functions
    ==================================================================*/
    $(window).on('load resize', function () {
        Breakpoint();
        smMax.addEventListener('change', Breakpoint);
        mdMax.addEventListener('change', Breakpoint);
        lgMax.addEventListener('change', Breakpoint);
        xlMax.addEventListener('change', Breakpoint);
        xxlMax.addEventListener('change', Breakpoint);
        smMin.addEventListener('change', Breakpoint);
        mdMin.addEventListener('change', Breakpoint);
        lgMin.addEventListener('change', Breakpoint);
        xlMin.addEventListener('change', Breakpoint);
        xxlMin.addEventListener('change', Breakpoint);
    });
})(jQuery);
/*=================================================================
    Superfox Script
==================================================================*/
function superfoxScript() {
    var getMode = localStorage.getItem('mode') || $('html').attr('data-theme') || 'light';
    /*=================================================================
        Item Scope
    ==================================================================*/
    $('html').each(function () {
        // Check if itemscope not exist
        if ($(this).attr('itemscope') === undefined) {
            $(this).attr('itemscope', 'itemscope');
            $(this).attr('itemtype', 'http://schema.org/Organization');
        }
    });
    /*=================================================================
        JS Void for empty links
    ==================================================================*/
    $('body').find('a').each(function () {
        // if value is only # then replace with js void
        if ($(this).attr('href') === '#') {
            $(this).attr('href', 'javascript:void(0)');
        }
    });
    /*=================================================================
        IMG empty alt
    ==================================================================*/
    $('img').each(function () {
        // Check if alt is empty
        if ($(this).attr('alt') === '' || $(this).attr('alt') === undefined) {
            // Add alt with domain name, example: alt="antheme.com", remove .{tld} from domain name
            $(this).attr('alt', window.location.hostname.replace(/\.[^.]+$/, '') || 'Picture');
        }
    });
    /*=================================================================
        Logo on Light/Dark Mode
    ==================================================================*/
    if ($('.main-logo').length > 0) {
        $('.main-logo').each(function () {
            var $this = $(this);
            var lightLogo = $this.attr('data-src');
            var darkLogo = $this.attr('data-src-dark');
            // console.log(lightLogo);
            // console.log(darkLogo);

            if (getMode === 'dark') {
                $this.attr('src', darkLogo);
            } else {
                $this.attr('src', lightLogo);
            }

            $(document).on('click', '.toggle-theme', function () {
                if ($('.toggle-theme').hasClass('active')) {
                    $this.attr('src', darkLogo);
                } else {
                    $this.attr('src', lightLogo);
                }
            });
        });
    }
}
superfoxScript();
/*=================================================================
    Pop Up
==================================================================*/
function ANPopUp() {
    // Trigger Pop Up
    $('.an-popup-btn').each(function () {
        var source = $(this).attr('href') || $(this).attr('src') || $(this).attr('data-image') || $(this).find('source').attr('src') || $(this).attr('data-video');
        $(this).on('click', function(e) {
            var downloadable = $(this).data('downloadable');
            if (downloadable === true) {
                var theAriaLabel = 'aria-label="Download"';
                var theDownload = 'download';
                if (title !== undefined && title !== '') {
                    theAriaLabel = 'aria-label="' + title + '"';
                    theDownload = 'download="' + title + '"';
                }
            }
            var autos = '';
            if (downloadable === true) {
                autos = ' ms-auto';
            }
            var closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="fill:currenColor;"><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg>';
            var downloadIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="fill:currenColor;"><path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path></svg>';
            // Check parent element
            var parent = '';
            // Check if this parent is "an-profile"
            if ($(this).parents('.an-profile').length || $(this).parents('.an-avatar').length) {
                parent = 'data-parent="an-profile"';
            } else if ($(this).parents('.an-card-action').length) {
                parent = 'data-parent="an-card-action" data-card-id="' + $(this).parents('.an-card').attr('data-id') + '"';
            } else {
                parent = '';
            }
            var targetReadmore = 'javascript:void(0)';
            if (window.location.href.indexOf('/page/') > -1) {
                targetReadmore = window.location.origin;
            }
            var readMoreBtn = '<a href="' + targetReadmore + '" class="readmore p-2 text-decoration-underline" ' + parent + '>Read More</a>';
            var CloseBtn = '<span class="an-popup-close'+autos+'" aria-label="Close">' + closeIcon + '</span>';
            if (source) {
                var title = $(this).parents('.an-card-body').find('.an-card-title').text() || $(this).attr('data-title') || $(this).attr('title');
                if (title !== undefined && title !== '') {
                    title = title;
                } else {
                    title = $(this).attr('alt') || $(this).attr('title') || '';
                }
                // Capitalize
                title = title.charAt(0).toUpperCase() + title.slice(1);
                var description = $(this).parents('.an-card-body').find('.an-card-detail').html() || $(this).attr('data-description');
                var html = '<div class="an-popup">';
                html += '<div class="an-popup-content">';
                html += '<div class="an-popup-header animated fadeInDown">';
                    html += '<div class="an-popup-title-wrapper">';
                    html += '<span class="an-popup-title excerpt">' + title + '</span>';
                    html += '</div>';
                    html += '<div class="an-popup-action ms-auto">';
                    if (downloadable === true) {
                        html += '<a href="' + source + '" '+ theAriaLabel +' '+ theDownload +'>'+ downloadIcon +'</a>';
                    }
                    html += CloseBtn;
                    html += '</div>';
                    html += '</div>';
                    html += '<div class="an-popup-body animated fadeIn">';
                    html += '<div class="an-popup-body-inner">';
                    // Check if this parent is .an-card has attributes data-type="gallery"
                    if ($(this).parents('.an-card').attr('data-type') === 'gallery' || $(this).parents('.an-popup-gallery').length) {
                        // Get all images from siblings
                        var images = [];
                        // Get all images alt from siblings
                        var imagesAlt = [];
                        // Get all images description from siblings
                        var imagesDescription = [];
                        // Get all images downloadable from siblings
                        var imagesDownloadable = [];
                        var theParent = '.an-card-wrap';
                        if ($(this).parents('.an-popup-gallery').length) {
                            theParent = '.an-popup-gallery';
                        }
                        // Loop each image
                        $(this).parents(theParent).find('.an-popup-btn').each(function () {
                            // Get image source
                            var imageSrc = $(this).attr('src') || $(this).attr('href') || $(this).attr('data-image') || $(this).find('source').attr('src');
                            // Push image source to images array
                            images.push(imageSrc);
                            // Get image alt
                            var imageAlt = $(this).attr('alt') || $(this).attr('title') || '';
                            // Push image alt to imagesAlt array
                            imagesAlt.push(imageAlt);
                            // Get data-description
                            var imageDescription = $(this).attr('data-description') || '';
                            // Check if imageDescription is not empty
                            if (imageDescription !== undefined && imageDescription !== '') {
                                // Push imageDescription to imageDescription array
                                imagesDescription.push('data-description="' + imageDescription + '"');
                            } else {
                                // Push empty string to imageDescription array
                                imagesDescription.push('');
                            }
                            // Get data-downloadable
                            var imageDownloadable = $(this).attr('data-downloadable') || '';
                            // Check if imageDownloadable is not empty
                            if (imageDownloadable !== undefined && imageDownloadable !== '') {
                                // Push imageDownloadable to imageDownloadable array
                                imagesDownloadable.push('data-downloadable="' + imageDownloadable + '"');
                            } else {
                                // Push empty string to imageDownloadable array
                                imagesDownloadable.push('');
                            }
                        });
                        // Set as gallery
                        html += '<div class="an-popup-gallery">';
                        // Check if image more than 1
                        if (images.length > 1) {
                        html += '<span class="an-popup-gallery-prev an-popup-nav-slider" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="fill: currentColor;"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg></span>';
                        $('.an-popup-title-wrapper').append('<div class="an-popup-gallery-counter">(<span class="an-popup-gallery-counter-current"></span>/<span class="an-popup-gallery-counter-total">' + images.length + '</span>)</div>');
                        }
                        html += '<div class="an-popup-gallery-inner">';
                        // Loop each image and add class active to the image that equals to clicked image and prevent duplicate image
                        for (var i = 0; i < images.length; i++) {
                            // Capitalize
                            imagesAlt[i] = imagesAlt[i].charAt(0).toUpperCase() + imagesAlt[i].slice(1);
                            if (images[i] === source && imagesAlt[i] === title) {
                                html += '<div class="an-popup-gallery-item active">';
                                $('.an-popup-gallery-counter-current').text(i + 1);
                            } else {
                                html += '<div class="an-popup-gallery-item">';
                            }
                            var styleNotExists = '';
                            if (!fileExists(images[i])) {
                                styleNotExists = ' style="width: 150px;height: 150px;"';
                                imagesAlt[i] = 'Image not found';
                                imagesDescription[i] = '';
                                imagesDownloadable[i] = '';
                            }
                            html += '<img src="' + images[i] + '" alt="' + imagesAlt[i] + '" ' + imagesDescription[i] + ' ' + imagesDownloadable[i] + styleNotExists +'>';
                            html += '</div>';
                        }
                        html += '</div>';
                        // Check if image more than 1
                        if (images.length > 1) {
                        html += '<span class="an-popup-gallery-next an-popup-nav-slider" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="fill: currentColor;"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path></svg></span>';
                        }
                        html += '</div>';
                    } else if ($(this).parents('.an-card').attr('data-type') === 'video') {
                        // Stop video
                        $(this).parents('.an-card').find('.an-video').each(function () {
                            $(this).get(0).pause();
                            $(this).get(0).currentTime = 0;
                            // Show poster instead of paused video
                            $(this).get(0).load();
                            // Show play button
                            $(this).siblings('.an-video-play-btn').fadeIn('fast');
                            $(this).siblings('.an-video-stop-btn').fadeOut('fast').removeClass('played');
                        });
                        // Clone video
                        var videoClone = $(this).closest('.an-card').find('.an-card-wrap').find('.an-video').clone();
                        // Check if parent "an-card-wrap" has attribute data-play-hover="true"
                        if ($(this).closest('.an-card').find('.an-card-wrap').attr('data-play-hover') === 'true') {
                            // Add attribute autoplay to video
                            videoClone.attr('autoplay', '');
                        }
                        // If video doesn't has attribute controls , add it
                        if (!videoClone.attr('controls')) {
                            videoClone.attr('controls', '');
                        }
                        // Check if video has class .has-autoplay
                        if (videoClone.hasClass('has-autoplay')) {
                            // Remove class .has-autoplay
                            videoClone.removeClass('has-autoplay');
                            // Set attribute autoplay to video
                            videoClone.attr('autoplay', '');
                        }
                        html += '<div class="an-popup-video">';
                        // Check if parent "an-card-wrap" has attribute data-popup-source
                        if ($(this).closest('.an-card').find('.an-card-wrap').attr('data-popup-source') !== undefined && $(this).closest('.an-card').find('.an-card-wrap').attr('data-popup-source') !== '') {
                            // Get video source
                            var videoSource = $(this).closest('.an-card').find('.an-card-wrap').attr('data-popup-source');
                            // Check if video source is youtube url or self-hosted video (mp4)
                            if (videoSource && videoSource.match(/youtube/g) || videoSource && videoSource.match(/youtu.be/g)) {
                                // Check if is youtube share url
                                if (videoSource.match(/youtu.be/g)) {
                                    // Replace youtu.be/ with youtube.com/embed/
                                    videoSource = videoSource.replace('youtu.be/', 'youtube.com/embed/');
                                }
                                // Check if is youtube watch url
                                if (videoSource.match(/watch/g)) {
                                    // Replace watch?v= with embed/
                                    videoSource = videoSource.replace('watch?v=', 'embed/');
                                    // Check if has parameter list=
                                    if (videoSource.match(/list=/g)) {
                                        // Replace embed/ with embed/videoseries?list=
                                        videoSource = videoSource.replace('embed/', 'embed/videoseries?si=');
                                    }
                                }
                                // Check if source is youtube playlist.
                                if (videoSource.match(/playlist/g)) {
                                    // Replace playlist?list= with embed/videoseries?list=
                                    videoSource = videoSource.replace('playlist?list=', 'embed/videoseries?list=');
                                }
                                // Check if video has class .has-autoplay
                                if ($(this).closest('.an-card').find('.an-card-wrap').children().hasClass('has-autoplay')) {
                                    // Check if has any parameter
                                    if (videoSource.match(/\?/g)) {
                                        // Set autoplay to video source
                                        videoSource = videoSource + '&autoplay=1';
                                    } else {
                                        // Set autoplay to video source
                                        videoSource = videoSource + '?autoplay=1';
                                    }
                                }
                                // Check if doesn't has parameter origin
                                if (!videoSource.match(/origin=/g)) {
                                    // Check if has any parameter
                                    if (videoSource.match(/\?/g)) {
                                        // Add parameter origin
                                        videoSource = videoSource + '&origin=' + window.location.origin;
                                    } else {
                                        // Add parameter origin
                                        videoSource = videoSource + '?origin=' + window.location.origin;
                                    }
                                }
                                // Check if title empty
                                if (title === '') {
                                    // Set title to 'Video'
                                    title = 'Youtube Video';
                                }
                                html += '<iframe src="' + videoSource + '" title="' + title + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
                            }
                            // Check if source is vimeo url
                            else if (videoSource.match(/vimeo/g)) {
                                // Get video id
                                var videoId = videoSource.split('/').pop();
                                // Set video source
                                videoSource = 'https://player.vimeo.com/video/' + videoId;
                                // Check if doesn't has parameter autoplay
                                if (!videoSource.match(/autoplay=/g)) {
                                    // Check if has any parameter
                                    if (videoSource.match(/\?/g)) {
                                        // Set autoplay to video source
                                        videoSource = videoSource + '&autoplay=1';
                                    } else {
                                        // Set autoplay to video source
                                        videoSource = videoSource + '?autoplay=1';
                                    }
                                }
                                // Check if title empty
                                if (title === '') {
                                    // Set title to 'Video'
                                    title = 'Vimeo Video';
                                }
                                html += '<div class="an-popup-video">';
                                html += '<iframe src="' + videoSource + '" title="' + title + '" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
                                html += '</div>';
                            }
                            // Return Self-hosted video
                            else {
                                if (fileExists(videoSource)) {
                                    // Check if has multiple source inside video
                                    if (videoClone.find('source').length > 1) {
                                        // Remove all source except first source
                                        videoClone.find('source:not(:first-child)').remove();
                                    }
                                    // Get extension of video source
                                    var videoSourceExtension = videoSource.split('.').pop();
                                    // Replace videoClone type with video source extension
                                    videoClone.find('source').attr('type', 'video/' + videoSourceExtension);
                                    // Replace source with video source
                                    videoClone.find('source').attr('src', videoSource);
                                    html += videoClone[0].outerHTML;
                                } else {
                                    html += '<div class="an-popup-content-not-supported">Source Video not found!</div>';
                                }
                            }
                        } else {
                            if (fileExists(videoClone.find('source').attr('src') || videoClone.find('source').attr('data-src') || videoClone.attr('src') || videoClone.attr('data-src'))) {
                                html += videoClone[0].outerHTML;
                            } else {
                                html += '<div class="an-popup-content-not-supported">Source Video not found!</div>';
                            }
                        }
                        html += '</div>';
                    } else {
                        // Check if source extension is  self-hosted video file
                        if (source.match(/\.(mp4|ogg|ogv|webm)/g)) {
                            if (fileExists(source)) {
                                var videoSourceExtension = source.split('.').pop();
                                if (videoSourceExtension === 'ogv') {
                                    videoSourceExtension = 'ogg';
                                }
                                var controlsList = '';
                                if (downloadable === false) {
                                    controlsList = ' controlsList="nodownload"';
                                }
                                html += '<div class="an-popup-video">';
                                html += '<video controls autoplay muted' + controlsList + '>';
                                html += '<source src="' + source + '" type="video/' + videoSourceExtension + '">';
                                html += 'Your browser does not support the video element.';
                                html += '</video>';
                                html += '</div>';
                            } else {
                                html += '<div class="an-popup-content-not-supported">Source Video not found!</div>';
                            }
                        }
                        // Check if source is youtube url
                        // var regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|playlist\?list=))((\w|-){11})(?:\S+)?$/;
                        else if (source.match(/youtu.be/g) || source.match(/youtube/g)) {
                            // Check if is youtube share url
                            if (source.match(/youtu.be/g)) {
                                // Replace youtu.be/ with youtube.com/embed/
                                source = source.replace('youtu.be/', 'youtube.com/embed/');
                            }
                            // Check if is youtube watch url
                            if (source.match(/watch/g)) {
                                // Replace watch?v= with embed/
                                source = source.replace('watch?v=', 'embed/');
                                // Check if has parameter list=
                                if (source.match(/list=/g)) {
                                    // Replace embed/ with embed/videoseries?list=
                                    source = source.replace('embed/', 'embed/videoseries?si=');
                                }
                            }
                            // Check if source is youtube playlist.
                            if (source.match(/playlist/g)) {
                                // Replace playlist?list= with embed/videoseries?list=
                                source = source.replace('playlist?list=', 'embed/videoseries?list=');
                            }
                            // Check if doesn't has parameter autoplay
                            if (!source.match(/autoplay=/g)) {
                                // Check if has any parameter
                                if (source.match(/\?/g)) {
                                    // Set autoplay to video source
                                    source = source + '&autoplay=1';
                                } else {
                                    // Set autoplay to video source
                                    source = source + '?autoplay=1';
                                }
                            }
                            // Check if doesn't has parameter origin
                            if (!source.match(/origin=/g)) {
                                // Check if has any parameter
                                if (source.match(/\?/g)) {
                                    // Add parameter origin
                                    source = source + '&origin=' + window.location.origin;
                                } else {
                                    // Add parameter origin
                                    source = source + '?origin=' + window.location.origin;
                                }
                            }
                            // Check if title empty
                            if (title === '') {
                                // Set title to 'Video'
                                title = 'Youtube Video';
                            }
                            html += '<div class="an-popup-video">';
                            html += '<iframe src="' + source + '" title="' + title + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
                            html += '</div>';
                        }
                        // Check if source is vimeo url
                        else if (source.match(/vimeo/g)) {
                            // Get video id
                            var videoId = source.split('/').pop();
                            // Set video source
                            source = 'https://player.vimeo.com/video/' + videoId;
                            // Check if doesn't has parameter autoplay
                            if (!source.match(/autoplay=/g)) {
                                // Check if has any parameter
                                if (source.match(/\?/g)) {
                                    // Set autoplay to video source
                                    source = source + '&autoplay=1';
                                } else {
                                    // Set autoplay to video source
                                    source = source + '?autoplay=1';
                                }
                            }
                            // Check if title empty
                            if (title === '') {
                                // Set title to 'Video'
                                title = 'Vimeo Video';
                            }
                            html += '<div class="an-popup-video">';
                            html += '<iframe src="' + source + '" title="' + title + '" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
                            html += '</div>';
                        }
                        // Check if source is google map url (share link | embed link | google map url)
                        else if (source.match(/maps/i) && source.match(/google/i) || source.match(/maps.app.goo.gl/g)) {
                            // Set zoom level
                            var zoom = 15;
                            // Check if source doesn't has parameter z=
                            if (!source.match(/z=/g)) {
                                // Check if source has any parameter
                                if (source.match(/\?/g)) {
                                    // Set zoom level to source
                                    source = source + '&z=' + zoom;
                                } else {
                                    // Set zoom level to source
                                    source = source + '?z=' + zoom;
                                }
                            }
                            // Check if title empty
                            if (title === '') {
                                // Set title to 'Google Map'
                                title = 'Google Map';
                            }
                            html += '<div class="an-popup-google-map">';
                            html += '<iframe src="' + source + '" title="' + title + '" frameborder="0" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
                            html += '</div>';
                        }
                        // Check if source is hash or not
                        else if (source.match(/#/g)) {
                            html += '<div class="an-popup-file-content">';
                            html += '<div class="an-popup-file-content-inner"></div>';
                            html += '</div>';
                            var element = $('.an-popup-file-content-inner');
                            // Find the target id
                            var targetHashId = source.split('#').pop();
                            // Set loading icon
                            element.html('<div class="an-popup-file-content-loading"><span class="an-loading-icon" role="status" aria-hidden="true">Loading...</span></div>');
                            // Check if target id is found
                            if ($('#' + targetHashId).length) {
                                // Clone the target
                                var targetClone = $('#' + targetHashId).clone();
                                // Set content
                                element.html(targetClone);
                                // Remove class "an-hidden-target" from cloned content
                                targetClone.removeClass('an-hidden-target');
                                setTimeout(function () {
                                    // Replace the target with the new content with class .an-hidden-target except cloned content
                                    $('body').find('#' + targetHashId).not(targetClone).replaceWith('<div id="' + targetHashId + '-hidden" class="an-hidden-target"></div>');
                                    $('.an-popup-footer').remove();
                                }, 100);
                                // On close pop up
                                $(document).on('click', '.an-popup-close', function() {
                                    // Add class "an-hidden-target"
                                    targetClone.addClass('an-hidden-target');
                                    // Replace the new content with the target
                                    $('#' + targetHashId + '-hidden').replaceWith(targetClone);
                                });
                                $(document).on('click', '.an-popup', function(e) {
                                    if (!$(e.target).closest('.an-popup-content').length) {
                                        // Add class "an-hidden-target"
                                        targetClone.addClass('an-hidden-target');
                                        // Replace the new content with the target
                                        $('#' + targetHashId + '-hidden').replaceWith(targetClone);
                                    }
                                });
                            } else {
                                // Set content
                                element.html('<div class="an-popup-file-content-not-found">File Content not found!</div>');
                            }
                        }
                        // Check if source is content ajax request (file)
                        else if (source.match(/\.(html|txt|md|json|js|css|scss|jsx|ts|tsx|xml)/g)) {
                            html += '<div class="an-popup-file-content">';
                            html += '<div class="an-popup-file-content-inner"></div>';
                            html += '</div>';
                            var element = $('.an-popup-file-content-inner');
                            var targetContent = $(this).attr('data-target-content');
                            var sourceExtension = source.split('.').pop();
                            // Using XMLHttpRequest
                            var xhttp;
                            xhttp = new XMLHttpRequest();
                            xhttp.onreadystatechange = function () {
                                if (this.readyState === 4) {
                                    // Set loading icon
                                    element.html('<div class="an-popup-file-content-loading"><span class="an-loading-icon" role="status" aria-hidden="true">Loading...</span></div>');
                                    var theContent = this.responseText;
                                    // Check if target content is empty and source is url or relative path without extension
                                    if (targetContent === undefined && !source.match(/\.(txt|md|json|js|css|scss|jsx|ts|tsx|xml)/g)) {
                                        element.html('target content is empty');
                                        // Return false
                                        return false;
                                    }
                                    // Check if target content is not empty
                                    if (targetContent !== undefined && targetContent !== '' && !source.match(/\.(txt|md|json|js|css|scss|jsx|ts|tsx|xml)/g)) {
                                        // Get content inside of source file/url of source file/url
                                        theContent = $(theContent).find(targetContent).html() || $(theContent).filter(targetContent).html();
                                    }
                                    // Check if request status is success
                                    if (this.status === 200) {
                                        // Set content
                                        var preWrap = '';
                                        if (source.match(/\.(md|json|js|css|scss|jsx|ts|tsx|xml)/g)) {
                                            // if ($('head').find('.an-prism').length === 0) {
                                            //     $('head').append('<link class="an-prism" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-tomorrow.min.css">');
                                            // }
                                            // if ($('body').find('.an-prism').length === 0) {
                                            //     $('body').append('<script class="an-prism" src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js"></script>');
                                            //     // Prism With theme "Tomorrow Night"
                                            //     $('body').append('<script class="an-prism" type="text/javascript">$(document).ready(function(){setTimeout(function(){Prism.highlightAll()}, 500)});</script>');
                                            // }
                                            preWrap = '<pre class="pre-blocks"><code class="language-' + sourceExtension + '">' + theContent + '</code></pre>';
                                            element.html(preWrap);
                                        } else {
                                            element.html(theContent);
                                        }
                                    }
                                    // Check if request status is error
                                    if (this.status === 404) {
                                        // Set content
                                        element.html('<div class="an-popup-file-content-not-found">File Content not found!</div>');
                                    }
                                }
                            }
                            xhttp.open('GET', source, true);
                            xhttp.send();
                        }
                        // Check if source is image
                        else if (source.match(/\.(jpe?g|png|gif|svg|webp|bmp|ico)/g) || source.match(/data:image/g) || source.match(/blob:/g) || source.match(/base64/g) || source.match(/unsplash/g) || source.match(/pexel/g)) {
                            html += '<div class="an-popup-image">';
                            html += '<img src="' + source + '" alt="' + title + '">';
                            html += '</div>';
                        }
                        // Show error message (Source not supported)
                        else {
                            html += '<div class="an-popup-content-not-supported">Source not found/supported!</div>';
                        }
                    }
                    html += '</div>';
                html += '</div>';
                if (description !== undefined && description !== '') {
                    // Remove tag from description except a tag or a link
                    if (description.match(/<a/g)) {
                        description = description.replace(/(<([^>]+)>)/gi, function (match, $1) {
                            return /<a/g.test($1) ? match : '';
                        });
                    } else {
                        description = description.replace(/(<([^>]+)>)/gi, '');
                    }
                    html += '<div class="an-popup-footer animated fadeInUp">';
                    html += '<div class="an-popup-description">';
                    html += '<small class="excerpt-2 fs-sm">' + description + '</small>';
                    html += '</div>';
                    // If Description character more than 130 then add "readmore" button
                    if (description.length > 130) {
                        html += readMoreBtn;
                    }
                    html += '</div>';
                }
                html += '</div>';
                html += '</div>';
                // Check if source status is not 404 except youtube
                if (!source.match(/youtube/g) || !source.match(/youtu.be/g) || !source.match(/vimeo/g)) {
                    if (!fileExists(source)) {
                        // Remove title
                        $('.an-popup-title-wrapper').remove();
                        // Remove footer
                        $('.an-popup-footer').remove();
                        // Remove action
                        $('.an-popup-action [download]').remove();
                        // add css to image wrapper
                        $('.an-popup-image').css('max-height', '300px');
                        $('.an-popup-image').find('img').css('aspect-ratio', 1);
                    }
                }
                // Check if popup is not exist
                if (!$('.an-popup').length) {
                    $('body').append(html);
                    $('.an-popup').addClass('an-popup-show');
                    // Disable body scroll when popup image is open
                    $('body').addClass('an-popup-open');
                    // Add click event for previous gallery item
                    var thePopupTitle = $('.an-popup-title');
                    var thePopupFooter = $('.an-popup-footer');
                    var thePopupAction = $('.an-popup-action');
                    // Pause audio when popup video is open
                    if ($('.an-popup-video').length) {
                        $('audio.active').each(function () {
                            // Check if audio is playing
                            if (!this.paused) {
                                // Pause audio
                                this.pause();
                            }
                        });
                    }
                    $('.an-popup-gallery-prev').on('click', function() {
                        var $currentItem = $('.an-popup-gallery-item.active');
                        var $prevItem = $currentItem.prev('.an-popup-gallery-item');

                        if ($prevItem.length === 0) {
                            // Wrap around to the last item if at the beginning
                            $prevItem = $('.an-popup-gallery-item:last');
                        }
                        var $prevItemTitle = $prevItem.find('img').attr('alt');
                        var $prevItemDescription = $prevItem.find('img').attr('data-description');
                        var $prevItemDownloadable = $prevItem.find('img').attr('data-downloadable');
                        var $prevItemSrc = $prevItem.find('img').attr('src');

                        $currentItem.removeClass('active');
                        thePopupTitle.text($prevItemTitle);
                        thePopupFooter.html('');
                        // Check if description is not empty
                        if ($prevItemDescription !== undefined && $prevItemDescription !== '') {
                            // Remove tag from description except a tag or a link
                            if ($prevItemDescription.match(/<a/g)) {
                                $prevItemDescription = $prevItemDescription.replace(/(<([^>]+)>)/gi, function (match, $1) {
                                    return /<a/g.test($1) ? match : '';
                                });
                            } else {
                                $prevItemDescription = $prevItemDescription.replace(/(<([^>]+)>)/gi, '');
                            }
                            thePopupFooter.append('<div class="an-popup-description"><small class="excerpt-2 fs-sm">' + $prevItemDescription + '</small></div>');
                            // If Description character more than 130 then add "readmore" button
                            if ($prevItemDescription.length > 130) {
                                thePopupFooter.find('.an-popup-description').append(readMoreBtn);
                            }
                        }
                        thePopupAction.html('');
                        if ($prevItemDownloadable !== undefined && $prevItemDownloadable !== '') {
                            if ($prevItemDownloadable === 'true') {
                                var $prevItemtheAriaLabel = 'aria-label="Download"';
                                var $prevItemtheDownload = 'download';
                                if ($prevItemTitle !== undefined && $prevItemTitle !== '') {
                                    $prevItemtheAriaLabel = 'aria-label="' + $prevItemTitle + '"';
                                    $prevItemtheDownload = 'download="' + $prevItemTitle + '"';
                                }
                                thePopupAction.append('<a href="' + $prevItemSrc + '" '+ $prevItemtheAriaLabel +' '+ $prevItemtheDownload +'>'+ downloadIcon +'</a>');
                            }
                        }
                        thePopupAction.append(CloseBtn);
                        $('.an-popup-gallery-counter-current').text($prevItem.index() + 1);
                        $prevItem.addClass('active');
                    });
                    // Add click event for next gallery item
                    $('.an-popup-gallery-next').on('click', function() {
                        var $currentItem = $('.an-popup-gallery-item.active');
                        var $nextItem = $currentItem.next('.an-popup-gallery-item');

                        if ($nextItem.length === 0) {
                            // Wrap around to the first item if at the end
                            $nextItem = $('.an-popup-gallery-item:first');
                        }
                        var $nextItemTitle = $nextItem.find('img').attr('alt');
                        var $nextItemDescription = $nextItem.find('img').attr('data-description');
                        var $nextItemDownloadable = $nextItem.find('img').attr('data-downloadable');
                        var $nextItemSrc = $nextItem.find('img').attr('src');

                        $currentItem.removeClass('active');
                        thePopupTitle.text($nextItemTitle);
                        thePopupFooter.html('');
                        // Check if description is not empty
                        if ($nextItemDescription !== undefined && $nextItemDescription !== '') {
                            // Remove tag from description except a tag or a link
                            if ($nextItemDescription.match(/<a/g)) {
                                $nextItemDescription = $nextItemDescription.replace(/(<([^>]+)>)/gi, function (match, $1) {
                                    return /<a/g.test($1) ? match : '';
                                });
                            } else {
                                $nextItemDescription = $nextItemDescription.replace(/(<([^>]+)>)/gi, '');
                            }
                            thePopupFooter.append('<div class="an-popup-description"><small class="excerpt-2 fs-sm">' + $nextItemDescription + '</small></div>');
                            // If Description character more than 130 then add "readmore" button
                            if ($nextItemDescription.length > 130) {
                                thePopupFooter.find('.an-popup-description').append(readMoreBtn);
                            }
                        }
                        thePopupAction.html('');
                        if ($nextItemDownloadable !== undefined && $nextItemDownloadable !== '') {
                            if ($nextItemDownloadable === 'true') {
                                var $nextItemtheAriaLabel = 'aria-label="Download"';
                                var $nextItemtheDownload = 'download';
                                if ($nextItemTitle !== undefined && $nextItemTitle !== '') {
                                    $nextItemtheAriaLabel = 'aria-label="' + $nextItemTitle + '"';
                                    $nextItemtheDownload = 'download="' + $nextItemTitle + '"';
                                }
                                thePopupAction.append('<a href="' + $nextItemSrc + '" '+ $nextItemtheAriaLabel +' '+ $nextItemtheDownload +'>'+ downloadIcon +'</a>');
                            }
                        }
                        thePopupAction.append(CloseBtn);
                        $('.an-popup-gallery-counter-current').text($nextItem.index() + 1);
                        $nextItem.addClass('active');
                    });
                }
            }
            e.preventDefault();
        });
    });
    // On click event for .an-popup-close
    $(document).on('click', '.an-popup-close', function() {
        $('body').removeClass('an-popup-open');
        $('.an-popup').addClass('animated fadeOut');
        // // Play audio when popup is close
        // $('audio.active').each(function () {
        //     // Check if audio is paused
        //     if (this.paused) {
        //         // Play audio
        //         this.play();
        //     }
        // });
        setTimeout(function() {
            $('.an-popup').removeClass('an-popup-show').remove();
            // $('.an-prism').each(function() {
            //     $(this).remove();
            // });
        }, 500);
    });
    // On click event for .readmore
    $(document).on('click', '.readmore', function() {
        var parent = $(this).data('parent');
        $('body').removeClass('an-popup-open');
        $('.an-popup').addClass('animated fadeOut');
        // // Play audio when popup is close
        // $('audio.active').each(function () {
        //     // Check if audio is paused
        //     if (this.paused) {
        //         // Play audio
        //         this.play();
        //     }
        // });
        setTimeout(function() {
            $('.an-popup').removeClass('an-popup-show').remove();
            // $('.an-prism').each(function() {
            //     $(this).remove();
            // });
        }, 500);
        if (parent === 'an-profile') {
            // Scroll to about section or to top
            // Check if about section is exist or not
            if ($('section#about').length) {
                $('html, body').scrollTop($('section#about').offset().top - initialOffset);
            } else if (window.location.href.indexOf('/page/') > -1) {
                window.location.href = $(this).attr('href');
            } else {
                $('html, body').scrollTop(0);
            }
        } else if (parent === 'an-card-action') {
            var cardID = $(this).data('card-id');
            // Trigger click on card link
            $('.an-card[data-id="' + cardID + '"]').find('.an-card-link').each(function() {
                // Check if this has href attribute
                if ($(this).attr('href') !== undefined && $(this).attr('href') !== '') {
                    // Redirect to href
                    window.location.href = $(this).attr('href');
                } else {
                    // Trigger click on card link to open modal
                    $(this).trigger('click');
                    // show modal
                    $('#an-modal').modal('show');
                }
            });
        } else {
            // Scroll to top
            $('html, body').scrollTop(0);
        }
        return false;
    });
    // On click event for a tag inside .an-popup-content
    $(document).on('click', '.an-popup-content a[data-target]', function() {
        $('body').removeClass('an-popup-open');
        $('.an-popup').addClass('animated fadeOut');
        // // Play audio when popup is close
        // $('audio.active').each(function () {
        //     // Check if audio is paused
        //     if (this.paused) {
        //         // Play audio
        //         this.play();
        //     }
        // });
        setTimeout(function() {
            $('.an-popup').removeClass('an-popup-show').remove();
            // $('.an-prism').each(function() {
            //     $(this).remove();
            // });
        }, 500);
        var target = $(this).data('target');
        if ($('#' + target).length) {
            // Scroll to target
            $('html, body').scrollTop($('#' + target).offset().top - initialOffset);
        } else {
            // Scroll to top
            $('html, body').scrollTop(0);
        }
        return false;
    });
    // On click event outside of .an-popup-content
    $(document).on('click', '.an-popup', function(e) {
        if (!$(e.target).closest('.an-popup-content').length) {
            $('body').removeClass('an-popup-open');
            $('.an-popup').addClass('animated fadeOut');
            // // Play audio when popup is close
            // $('audio.active').each(function () {
            //     // Check if audio is paused
            //     if (this.paused) {
            //         // Play audio
            //         this.play();
            //     }
            // });
            setTimeout(function() {
                $('.an-popup').removeClass('an-popup-show').remove();
                // $('.an-prism').each(function() {
                //     $(this).remove();
                // });
            }, 500);
        }
    });
}
if ($('.an-popup-btn').length > 0) {
    ANPopUp();
}
/*=================================================================
    Back to top
==================================================================*/
function backToTop() {
    // On scroll .content-wrapper
    $('#swup').on('scroll', function () {
        var $this = $(this);
        var backToTop = $('#back-to-top');
        var scrollPosition = $this.scrollTop();
        // If scroll position > 100
        if (scrollPosition > $this.height() / 3) {
            backToTop.fadeIn();
            if (smMax.matches) {
                $('.copyright').removeClass('text-center');
            }
        } else {
            backToTop.fadeOut();
            if (smMax.matches) {
                $('.copyright').addClass('text-center');
            }
        }
    });
    // On click #back-to-top
    $('#back-to-top').on('click', function () {
        $('#swup').animate({ scrollTop: 0 }, 800);
        return false;
    });
}
// Check if #back-to-top exist
if ($('#back-to-top').length > 0) {
    backToTop();
}
/*=================================================================
    Client Slider
==================================================================*/
function swiperContainer() {
    // Swiper Slider
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 16,
        slidesPerGroup: 1,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            576: {
                slidesPerView: 4,

            },
        }
    });
}
// Check if .swiper-container exist
if ($('.swiper-container').length > 0) {
    swiperContainer();
}
/*=================================================================
    Header: Navbar & Offcanvas
==================================================================*/
function headerNavbar() {

    var lgMax = window.matchMedia('(max-width: 991.98px)');
    // // Offcanvas
    // $('#super-header-menu').each(function () {
    //     var $this = $(this);
    //     $(window).on('load resize', function () {
    //         if (lgMin.matches) {
    //             $this.removeClass('show').removeAttr('aria-modal').removeAttr('role').removeAttr('aria-hidden').removeAttr('data-backdrop').removeAttr('data-keyboard');
    //             $('.offcanvas-backdrop').remove();
    //             $('body').removeAttr('style');
    //         }
    //     });
    // });
    /* ======== Menu - Siblings Fade on Hover ======== */
    $('#menu-header-menu .nav-item').each(function() {
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.hover(function() {
                $this.siblings().not('.active').toggleClass('opacity-25');
            });
        }
        $(window).on('load resize', function () {
            if (lgMax.matches) {
                $this.on('click', function() {
                    // Hide offcanvas bootstrap
                    $('#super-header-menu').offcanvas('hide');
                });
            }
        });
    });
    /* ======== Menu - Dropdown separator ======== */
    $('.menu-item.has-separator').each(function () {
        $(this).after('<li class="divider-menu"><hr class="dropdown-divider" /></li>');
    });
    /* ======== Menu - Dropdown Head button ======== */
    $('li.menu-item').find('.extend-btn-header').each(function () {
        // Check if button is exist then remove button
        if ($(this).length > 0) {
            $(this).remove();
        }
    });
    // Show dropdown on hover
    $('.menu-item.menu-item-has-children').each(function () {
        var $this = $(this);
        var dropdown = $this.find('.dropdown-menu');
        // On hover
        $this.hover(function () {
            dropdown.addClass('show');
            dropdown.attr('data-popper', 'static');
        }, function () {
            dropdown.removeClass('show');
            dropdown.removeAttr('data-popper');
        });
    });
}
// Check if #menu-header-menu exist
if ($('#menu-header-menu').length > 0) {
    headerNavbar();
}

/*=================================================================
    Video Player & Sound Button
==================================================================*/
function videoPlayer() {
    var lgMin = window.matchMedia('(min-width: 992px)');
    $('.video-player').each(function () {
        var $this = $(this);
        $(window).on('load resize', function () {
            if (lgMin.matches) {
                // If the video is unmuted, mute it
                if (!$this.prop('muted')) {
                    $this.prop('muted', true);
                    $('#btn-sound').html('<i class="ri-volume-mute-fill"></i>');
                }
            }
        });
    });

    // Disable video save as on right click
    document.querySelector('.video-player').addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
}
// Check if .video-player exist
if ($('.video-player').length > 0) {
    videoPlayer();
}
/*=================================================================
    Video Sound Button
==================================================================*/
function videoSound() {
    var video = document.querySelector('.video-player');
    var btnSound = document.querySelector('#btn-sound');
    btnSound.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            btnSound.innerHTML = '<i class="ri-volume-up-fill"></i>';
        } else {
            video.muted = true;
            btnSound.innerHTML = '<i class="ri-volume-mute-fill"></i>';
        }
    });
}
if ($('#btn-sound').length > 0 && $('.video-player').length > 0) {
    videoSound();
}
/*=================================================================
    Video Fullscreen Button
==================================================================*/
function videoFullscreen() {
    var video = document.querySelector('.video-player');
    var btnFullscreen = document.querySelector('#btn-fullscreen');
    btnFullscreen.addEventListener('click', function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    });
}
if ($('#btn-fullscreen').length > 0 && $('.video-player').length > 0) {
    videoFullscreen();
}
/*=================================================================
    Pop up Video
==================================================================*/
function popUpVideo() {
    document.getElementById('play-video').addEventListener('click', function() {
        // Pause video
        document.querySelector('.video-player').pause();
        // Create popup video element
        var video = document.createElement('div');
        video.id = 'popup-video';
        video.className = 'popup-video';
        video.src = document.querySelector('.video-player source').src;
        video.innerHTML = '<div class="video-backdrop"></div><div class="popup-video-container"><div class="popup-video-content"><button type="button" class="btn btn-icon btn-close" id="close-video"><i class="ri-close-fill"></i></button><video autoplay muted disablePictureInPicture controls controlsList="nodownload" playsinline class="video-player-popup" poster="/assets/img/screenshot.png" preload="metadata"><source src="' + video.src + '" type="video/mp4"></video></div></div>';
        document.body.appendChild(video);
        // Unmute video
        document.querySelector('.video-player-popup').muted = false;
        // Close popup video element
        document.getElementById('close-video').addEventListener('click', function() {
            document.getElementById('popup-video').remove();
            // Play video
            document.querySelector('.video-player').play();
        });
        // Close popup video element when click video backdrop
        document.querySelector('.video-backdrop').addEventListener('click', function() {
            document.getElementById('popup-video').remove();
            // Play video
            document.querySelector('.video-player').play();
        });
        // Close popup video element when press ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                document.getElementById('popup-video').remove();
                // Play video
                document.querySelector('.video-player').play();
            }
        });
        // Disable video save as on right click
        document.querySelector('.video-player-popup').addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
        // On ended video
        document.querySelector('.video-player-popup').addEventListener('ended', function() {
            document.getElementById('popup-video').remove();
            // Play video
            document.querySelector('.video-player').play();
        });
    });
}
if ($('#play-video').length > 0) {
    popUpVideo();
}

/*=================================================================
    Counter
==================================================================*/
function anCount() {
    $('.an-count').each(function() {
        var $this = $(this);
        var count = $this.data('count');
        // Check if count is not empty
        if (count === undefined || count === '') {
            // Don't continue
            return;
        }
        var duration = $this.data('duration');
        var prefix = $this.data('prefix');
        var suffix = $this.data('suffix');
        var runOnce = $this.data('run-once');
        var represent = $this.attr('data-represent');
        // Check if duration is not empty
        if (duration === undefined || duration === '') {
            duration = 2000;
        }
        // Check if prefix is not empty
        if (prefix === undefined || prefix === '') {
            prefix = '';
        }
        // Check if suffix is not empty
        if (suffix === undefined || suffix === '') {
            suffix = '';
        }
        // Check if runOnce is not empty
        if (runOnce === undefined || runOnce === '') {
            runOnce = true;
        }
        $this.text(prefix + '0' + suffix);
        if (isElementInViewport(this)) {
            runCount();
        }
        // Start count once when element is visible on viewport
        $(window).on('scroll', function() {
            $this.each(function() {
                // Check if runOnce is false. It's mean run count every time element is visible on viewport
                if (runOnce === false) {
                    // Check if element has class .counted
                    if (!$(this).hasClass('counted')) {
                        if (isElementInViewport(this)) {
                            runCount();
                        }
                    } else {
                        // Check if element is not visible on viewport
                        if (!isElementInViewport(this)) {
                            // Reset count
                            resetCount();

                        }
                    }
                } else {
                    // Check if element has class .counted
                    if (!$(this).hasClass('counted')) {
                        if (isElementInViewport(this)) {
                            runCount();
                        }
                    }
                }
            });
        });
        // Run count
        function runCount() {
            // Add class .counted
            $this.addClass('counted');
            if (represent === 'true') {
                // Check if count is more than 1000, empty suffix
                if (count >= 1000) {
                    var oldSuffix = suffix;
                    suffix = '';
                }
            }
            // Run count once
            $({ Counter: 0 }).animate({ Counter: count }, {
                duration: duration,
                easing: 'swing',
                step: function() {
                    $this.text(prefix + Math.ceil(this.Counter).toLocaleString(lang) + suffix);
                },
                complete: function() {
                    if (represent === 'true') {
                        // Example: 1000 = 1K, 1000000 = 1M, 1000000000 = 1B, if 1200 = 1.2K, 1200000 = 1.2M, 1200000000 = 1.2B
                        if (count >= 1000 && count < 1000000) {
                            count = count / 1000;
                            // Check if suffix is not empty
                            if (suffix === undefined || suffix === '') {
                                suffix = 'K';
                            }
                        } else if (count >= 1000000 && count < 1000000000) {
                            count = count / 1000000;
                            // Check if suffix is not empty
                            if (suffix === undefined || suffix === '') {
                                suffix = 'M';
                            }
                        } else if (count >= 1000000000) {
                            count = count / 1000000000;
                            // Check if suffix is not empty
                            if (suffix === undefined || suffix === '') {
                                suffix = 'B';
                            }
                        }
                        // Check if oldSuffix is not empty and not equal to newSuffix
                        if (oldSuffix !== undefined && oldSuffix !== '' && oldSuffix !== suffix) {
                            suffix += oldSuffix;
                        }
                    }
                    $this.text(prefix + count + suffix);
                }
            });
        }
        // Reset count
        function resetCount() {
            $({ Counter: count }).animate({ Counter: 0 }, {
                duration: duration / 2,
                easing: 'swing',
                step: function() {
                    $this.text(prefix + Math.ceil(this.Counter).toLocaleString(lang) + suffix);
                },
                complete: function() {
                    $this.text(prefix + '0' + suffix);
                }
            });
            // Remove class .counted
            $this.removeClass('counted');
        }
    });
}
// Check if .an-count exist
if ($('.an-count').length > 0) {
    anCount();
}

/*=================================================================
    Typing Text
==================================================================*/
function ANTyped(el, text, duration, cursor) {
this.text = text;
this.el = el;
this.loopNum = 0;
this.duration = parseInt(duration, 10) || 2000;
this.cursor = cursor;
this.txt = '';
this.tick();
this.isDeleting = false;
}

ANTyped.prototype.tick = function() {
var i = this.loopNum % this.text.length;
var fullTxt = this.text[i];

if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
} else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
}

var theCursor, cursorBlink;
if (this.cursor === true) {
    theCursor = 'data-cursor="true"';
    cursorBlink = '<span class="an-typed-cursor">|</span>';
} else {
    theCursor = '';
    cursorBlink = '';
}

this.el.innerHTML = '<span class="an-typed-text" ' + theCursor + '>' + this.txt + cursorBlink + '</span>';

var that = this;
var delta = 200 - Math.random() * 100;

if (this.isDeleting) {
    delta /= 2;
}

if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.duration;
    if (this.cursor === true) {
        this.el.querySelector('.an-typed-cursor').classList.add('an-typed-blink');
    }
    setTimeout(function() {
        that.isDeleting = true;
    }, 500);
} else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
}

setTimeout(function() {
    that.tick();
}, delta);
};

function runTyped() {
    document.querySelectorAll('.an-typed').forEach(function (el) {
    var typingText = el.getAttribute('data-typing-text');
    if (typingText === null) {
        return;
    } else {
        typingText = typingText.split(',');
    }
    var typingSpeed = parseInt(el.getAttribute('data-typing-period'), 10);
    if (isNaN(typingSpeed)) {
        typingSpeed = 2000;
    }
    var showCursor = el.getAttribute('data-typing-cursor');
    if (showCursor === 'false') {
        showCursor = false;
    } else {
        showCursor = true;
    }

    var typed = new ANTyped(el, typingText, typingSpeed, showCursor);
    typed.tick();
    });
}
// Check if .an-typed exist
if ($('.an-typed').length > 0) {
    runTyped();
}
/*=================================================================
    Project Grid
==================================================================*/
function projectGrid() {
    var postCount = $('.an-post-count');
    var totalCount = $('.an-total-post');
    var postGrid = $('.post-grid');
    $('#project-filter li').on('click', function() {
        var filter = $(this).data('filter');
        $('#project-filter li').removeClass('active');
        $(this).addClass('active');
        $('#project-filter li .filter-title').removeClass('collapse');
        $('#project-filter li .filter-content').removeClass('collapse');
        $('.post-grid').each(function() {
            if ($(this).attr('id') == filter) {
                $(this).removeClass('d-none');
                // Update the post count
                postCount.text($(this).find('.card').length);
                // totalCount.text($(this).find('.card').length);
            } else {
                $(this).addClass('d-none');
            }
        });
        $('#project-filter li').each(function() {
            if ($(this).hasClass('active')) {
                $(this).find('.filter-title').addClass('collapse');
            } else {
                $(this).find('.filter-content').addClass('collapse');
            }
        });
    });
}
// Check if #projects exist
if ($('#projects').length > 0) {
    projectGrid();
}
/*=================================================================
    Form
==================================================================*/
function modalCareer() {
    if ($('#career-open').length > 0) {
        $('body').prepend('<div id="career-form" class="modal fade" tabindex="-1" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-lg-down"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">Apply for <span class="job-title"></span></h5><button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><div id="an-modal-content-form"><div id="alert-form-career" class="alert-an-form" role="alert" hidden aria-label="Form Alert"></div></div></div></div></div></div>');
        $('#an-modal-content-form').append('<form id="form-career" action="php/submit-form.php" method="POST" class="an-form row g-3" data-success-message="Your message has been sent successfully." data-error-message="We\'re sorry, there was an error. Please try again." data-floating-validation="true" autocomplete="off"></form>');
        $('#form-career').prepend('<div class="col-12"><div class="d-grid"><button type="submit" class="btn btn-primary mt-3" name="an-submit" onclick="uploadForm(this)" data-progress-text="Sending...">Apply Now</button><div class="an-submit-progress" hidden><div class="an-submit-progress-bar bg-secondary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width:0%"></div></div></div></div>');
        $('#form-career').prepend('<div class="col-12"><div class="form-group"><div class="form-floating"><textarea data-count="true" maxlength="1000" class="form-control" id="message" name="message" placeholder="Your message" required style="height:110px"></textarea><label for="message">Write something for consideration...</label><div class="invalid-feedback">Something like your experience or your skills.</div></div></div></div>');
        $('#form-career').prepend('<div class="col-12"><div class="form-group"><label for="portfolio" class="form-label">Upload your best CV/Resume/Portfolio</label><input class="form-control" type="file" id="portfolio" name="portfolio" data-droppable="true" data-file-validation="true" accept=".pdf" data-max-size="10" data-max-size-unit="MB" data-invalid-type-message="Invalid file type. Please upload only pdf." data-invalid-size-message="Your file size is too large. Max total file size is 10MB." required><small class="fs-xs fst-italic text-muted">*Only accept pdf file. Max file size is 10MB.</small><div class="invalid-feedback">Please upload your CV/Resume/Portfolio.</div></div></div>');
        $('#form-career').prepend('<div class="col-12" hidden><div class="form-group"><div class="form-floating"><input type="text" class="form-control" id="position" name="position" placeholder="Position" autocomplete="off" required readonly="readonly" value="Job"><label for="position">I want to apply for</label><div class="invalid-feedback">Please, enter the position you want to apply for.</div></div></div></div>');
        $('#form-career').prepend('<div class="col-12"><div class="form-group"><div class="form-floating"><input type="text" class="form-control" id="email" name="email" placeholder="Your email" data-email-validation="true" autocomplete="off" required><label for="email">Put your email here</label><div class="invalid-feedback">Please enter your email, so I can contact you later.</div></div></div></div>');
        $('#form-career').prepend('<div class="col-12"><div class="form-group"><div class="form-floating"><input type="text" class="form-control" id="name" name="name" placeholder="Your name" autocomplete="off" required><label for="name">Hi, tell us your name</label><div class="invalid-feedback">Please, let us know your name.</div></div></div></div>');
        $('body').prepend('<div id="modal-career" class="modal fade" tabindex="-1" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-lg-down modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">&nbsp;</h5><button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><div id="an-modal-content"></div></div><div class="modal-footer"><button type="button" data-toggle="modal" data-target="#career-form" class="btn btn-secondary btn-form" data-job="Job">Apply Now</button></div></div></div></div>');
    }
    if ($('#career-open').length === 0) {
        $('#career-form').remove();
        $('#modal-career').remove();
    }
}
modalCareer();
function showJobDetail() {
    var modal = document.getElementById("modal-career");
    var modalTitle = modal.querySelector(".modal-title");
    var modalContent = modal.querySelector("#an-modal-content");
    var modalFooter = modal.querySelector(".modal-footer [data-target='#career-form']");
    var btnApply = document.querySelectorAll(".btn-apply");
    var btnForm = document.querySelector(".btn-form");
    // Get closest job title and job detail
    btnApply.forEach(function (btn) {
        btn.addEventListener("click", function () {
            var jobTitle = this.closest(".card").querySelector(".job-title").innerText;
            var jobDetail = this.closest(".card").querySelector(".job-detail").innerHTML;
            modalTitle.innerText = jobTitle;
            modalContent.innerHTML = jobDetail;
            modalFooter.setAttribute("data-job", jobTitle);
        });
    });
    // On modal close, reset modal title and content
    modal.addEventListener("hidden.modal", function () {
        modalTitle.innerText = "";
        modalContent.innerHTML = "";
        // modalFooter.setAttribute("data-job", "Job");
    });
    var modalForm = document.getElementById("career-form");
    var jobTitleModal = modalForm.querySelector(".job-title");
    var jobPositionForm = document.getElementById("position");
    // // On click apply now, set job title
    // btnForm.addEventListener("click", function () {
    //     jobTitleModal.innerText = this.getAttribute("data-job");
    //     jobPositionForm.value = this.getAttribute("data-job");
    // });
    // On show modal form, Update job title
    modalForm.addEventListener("shown.modal", function () {
        jobTitleModal.innerText = btnForm.getAttribute("data-job");
        jobPositionForm.value = btnForm.getAttribute("data-job");
        jobPositionForm.setAttribute("value", jobPositionForm.value);
        // // Trigger change event to update position value
        // jobPositionForm.dispatchEvent(new Event("change"));
    });
    // On modal form close, reset job title
    modalForm.addEventListener("hidden.modal", function () {
        jobTitleModal.innerText = "";
        jobPositionForm.value = "Job";
        jobPositionForm.setAttribute("value", jobPositionForm.value);
    });
}
if ($('#modal-career').length > 0 && $('#career-form').length > 0) {
    showJobDetail();
}
/*=================================================================
    AN Modal
==================================================================*/
function ANModal() {
    // Check if modal is not exist, create modal
    if($('body').find('#an-modal').length === 0) {
        $('body').prepend('<div id="an-modal" class="modal fade" tabIndex="-1" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-lg-down modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title"> </h5><button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></div><div class="modal-body"><div id="an-modal-content"></div></div></div></div>');
    }

    var modal = $('#an-modal');
    // Check if modal is exist
    if (modal.length) {
        // Element Modal
        var modalTitle = modal.find('.modal-title');
        var modalContent = modal.find('#an-modal-content');
        // Source Data
        var modalSourceUrl = modal.attr('data-source-url');
        var modalSourceTitle = modal.attr('data-source-title');
        if (modalSourceTitle === undefined || modalSourceTitle === '') {
            modalSourceTitle = '';
        }
        var modalSourceTarget = modal.attr('data-target-content');
        if (modalSourceUrl !== undefined && modalSourceUrl !== '') {
            // Get hash from source url
            var hash = modalSourceUrl.split('#')[1];
            // Ajax Request
            $.ajax({
                url: modalSourceUrl,
                type: 'GET',
                dataType: 'html',
                beforeSend: function () {
                    // Show loading icon
                    modalContent.html('<div class="an-modal-content-loading"><div class="an-modal-content-loading-icon"><span class="an-loading-icon" role="status" aria-hidden="true">Loading...</span></div></div>');
                }
            }).done(function (data) {
                // Get content inside of source file/url of source file/url
                var theContent = $(data).find(modalSourceTarget).html() || $(data).filter(modalSourceTarget).html();
                // Check if content is not empty
                if (theContent !== undefined && theContent !== '') {
                    // Set modal title
                    modalTitle.html(modalSourceTitle + ' <a href="' + modalSourceUrl + '" class="an-modal-content-link fs-sm fw-normal ms-1" target="_blank" title="' + modalSourceTitle + '"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style="fill: currentColor;"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg> <span>Open in new tab</span></a>');
                    // Set modal content
                    modalContent.html(theContent);
                    // Check if hash is not empty
                    if (hash !== undefined && hash !== '') {
                        // Scroll theContent to target hash
                        setTimeout(function () {
                            var hashTarget = modalContent.find('#' + hash);
                            // scrollIntoView
                            if (hashTarget.length) {
                                hashTarget[0].scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start',
                                    inline: 'nearest'
                                });
                            }
                        }, 100);
                    }
                } else {
                    // Set not found content
                    modalContent.html('<div class="an-modal-content-not-found">Content not found!</div>');
                }
            }).fail(function (response) {
                modalTitle.html('Error!'); // Set modal title to 'Error!
                modalContent.html('<div class="an-modal-content-not-found -error">' + response.statusText + '</div>');
            });
        } else {
            // Set not found content
            modalContent.html('<div class="an-modal-content-not-found">Content not found!</div>');
        }
    } else {
        // Show error message
        $('body').append('<div id="alert-modal-not-found"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="fill: currentColor;"><path d="M12.865 3.00017L22.3912 19.5002C22.6674 19.9785 22.5035 20.5901 22.0252 20.8662C21.8732 20.954 21.7008 21.0002 21.5252 21.0002H2.47266C1.92037 21.0002 1.47266 20.5525 1.47266 20.0002C1.47266 19.8246 1.51886 19.6522 1.60663 19.5002L11.1329 3.00017C11.4091 2.52187 12.0206 2.358 12.4989 2.63414C12.651 2.72191 12.7772 2.84815 12.865 3.00017ZM4.20471 19.0002H19.7932L11.9989 5.50017L4.20471 19.0002ZM10.9989 16.0002H12.9989V18.0002H10.9989V16.0002ZM10.9989 9.00017H12.9989V14.0002H10.9989V9.00017Z"></path></svg><span class="alert-modal-text">Warning! Target Modal Not Found.</span></div>');
        // Remove alert after 3 seconds
        setTimeout(function () {
            $('#alert-modal-not-found').remove();
        }, 3000);
    }

    // On Modal Hidden
    modal.on('hidden.modal', function () {
        // Remove modal title on modal-header
        modal.find('.modal-title').html('');
        // Remove modal content
        modal.find('#an-modal-content').html('');
        // Remove attributes
        modal.removeAttr('data-source-url');
        modal.removeAttr('data-source-title');
        modal.removeAttr('data-target-content');
    });
}
ANModal();
/*=================================================================
    Credential form
==================================================================*/
function credentialForm() {
    var triggerCredential = $('[data-target="#modal-credential"]');
    if (triggerCredential.length > 0) {
        var credentialForm = '<div id="alert-form-credential" class="alert-an-form" role="alert" hidden aria-label="Form Alert"></div>';
        credentialForm += '<form id="form-credential" action="php/submit-form.php" method="POST" class="an-form row g-3" data-success-message="Credential successfully downloaded." data-error-message="We\'re sorry, there was an error. Please try again." data-floating-validation="true" autocomplete="off">';
        credentialForm += '<input type="text" name="bot" id="bot" class="noview">';
        credentialForm += '<div class="col-12"><div class="form-group"><div class="form-floating"><input type="text" class="form-control" id="name" name="name" placeholder="Your name" autocomplete="off" required><label for="name">Hi, tell us your name</label><div class="invalid-feedback">Please, let us know your name.</div></div></div></div>';
        credentialForm += '<div class="col-12"><div class="form-group"><div class="form-floating"><input type="text" class="form-control" id="email" name="email" placeholder="Your email" data-email-validation="true" autocomplete="off" required><label for="email">Put your email here</label><div class="invalid-feedback">Please enter your email.</div></div></div></div>';
        credentialForm += '<div class="col-12"><div class="form-group"><div class="form-floating"><input type="text" class="form-control" id="phone" name="phone" placeholder="Your phone number" data-phone-validation="true" autocomplete="off" required><label for="phone">Let us now your phone number</label><div class="invalid-feedback">Please enter your phone number.</div></div></div></div>';
        credentialForm += '<div class="col-12"><div class="form-group"><div class="form-floating"><input type="text" class="form-control" id="company" name="company" placeholder="Your company" autocomplete="off" required><label for="company">Tell us what company you work for</label><div class="invalid-feedback">Please enter your company.</div></div></div></div>';
        credentialForm += '<div class="col-12"><div class="d-grid"><button type="submit" class="btn btn-primary" name="an-credential" onclick="uploadForm(this)" data-progress-text="Downloading...">Download Credential</button><div class="an-submit-progress" hidden><div class="an-submit-progress-bar bg-secondary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width:0%"></div></div></div></div>';
        credentialForm += '</form>';

        if ($('body').find('#modal-credential').length === 0) {
            $('body').prepend('<div id="modal-credential" class="modal fade" tabIndex="-1" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-lg-down"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">Superfox Saga Credential</h5><button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></div><div class="modal-body">' + credentialForm + '</div></div></div>');
        }
    } else {
        if ($('body').find('#modal-credential').length > 0) {
            $('#modal-credential').remove();
        }
        return false;
    }
}
credentialForm();
/* ======== Form Validation ======== */
var prefix = document.querySelector('html').getAttribute('data-prefix') || '';
var ANForm = function () {
    // Form Validation (on Submit, Input on Keyup)
    $('form').each(function () {
        var form = $(this);
        var inputs = form.find('input, textarea, select');
        var buttonSubmit = form.find('button[type="submit"], input[type="submit"]');

        // State color
        var defaultBg = '#626970';
        var successBg = window.getComputedStyle(document.body).getPropertyValue('--' + prefix + 'success') || '#13ae6d';
        var successText = successBg;
        var dangerBg = window.getComputedStyle(document.body).getPropertyValue('--' + prefix + 'danger') || '#f94e4e';
        var dangerText = dangerBg;
        var warningBg = window.getComputedStyle(document.body).getPropertyValue('--' + prefix + 'warning') || '#ffa800';
        // Badge css
        var badgeCss = {
            'font-size': '0.75rem',
            'font-weight': 'normal',
            'padding': '0 .25rem',
            'border-radius': '.25rem',
            'line-height': '1.5',
            'text-align': 'center',
            'vertical-align': 'baseline',
            'white-space': 'nowrap',
            'display': 'inline-block',
            'color': '#fff',
            'background-color': defaultBg,
        };

        // Check if form doesn't have class .an-form
        if (!form.hasClass('an-form')) {
            // Stop here
            return;
        }

        // Feedback Class Type
        var floatingValidation = form.attr('data-floating-validation');
        var invalidType = 'invalid-feedback';
        var validType = 'valid-feedback';
        if (floatingValidation === 'true') {
            invalidType = 'invalid-tooltip';
            validType = 'valid-tooltip';

            // Replace class .invalid-feedback with .invalid-tooltip
            form.find('[class^="invalid-"]').each(function () {
                var className = $(this).attr('class');
                var newClassName = className.replace('invalid-feedback', 'invalid-tooltip');
                $(this).removeClass(className);
                $(this).addClass(newClassName);
            });
            // Replace class .valid-feedback with .valid-tooltip
            form.find('[class^="valid-"]').each(function () {
                var className = $(this).attr('class');
                var newClassName = className.replace('valid-feedback', 'valid-tooltip');
                $(this).removeClass(className);
                $(this).addClass(newClassName);
            });

            // Set absolute position to badge
            badgeCss['position'] = 'absolute';
            badgeCss['z-index'] = '5';
            badgeCss['bottom'] = '100%';
            badgeCss['margin-bottom'] = '.1rem';
        }

        // Get form id
        var formID = form.attr('id');
        // Check if form id is not empty
        if (formID === undefined || formID === '') {
            // Generate random id max 4 digits
            formID = 'an-form-' + Math.floor(Math.random() * 9999);
            // Add id to form
            form.attr('id', formID);
        }
        // Check alert ".alert-an-form" is exist or not
        if (form.parent().find('.alert-an-form').length === 0) {
            // Add alert ".alert-an-form" before form
            form.before('<div id="alert-' + formID + '" class="alert-an-form" role="alert" aria-label="Form Alert" hidden></div>');
        } else {
            // Check if alert ".alert-an-form" has id or not
            if (form.parent().find('.alert-an-form').attr('id') === undefined || form.parent().find('.alert-an-form').attr('id') === '') {
                // Add id to alert ".alert-an-form"
                form.parent().find('.alert-an-form').attr('id', 'alert-' + formID);
            } else {
                // Check if alert ".alert-an-form" has id but not same with form id
                if (form.parent().find('.alert-an-form').attr('id') !== formID) {
                    // Add id to alert ".alert-an-form"
                    form.parent().find('.alert-an-form').attr('id', 'alert-' + formID);
                } else {
                    // Do nothing
                }
            }
            // Check if alert ".alert-an-form" has role or not
            if (form.parent().find('.alert-an-form').attr('role') === undefined || form.parent().find('.alert-an-form').attr('role') === '') {
                // Add role to alert ".alert-an-form"
                form.parent().find('.alert-an-form').attr('role', 'alert');
            }
            // Check if alert ".alert-an-form" has hidden attribute or not
            if (form.parent().find('.alert-an-form').attr('hidden') === undefined || form.parent().find('.alert-an-form').attr('hidden') === '') {
                // Add hidden attribute to alert ".alert-an-form"
                form.parent().find('.alert-an-form').attr('hidden', true);
            }
            // Check if alert ".alert-an-form" has class .d-none or not
            if (form.parent().find('.alert-an-form').hasClass('d-none')) {
                // Remove class .d-none
                form.parent().find('.alert-an-form').removeClass('d-none');
            }
            // Check if alert ".alert-an-form" has aria-label or not
            if (form.parent().find('.alert-an-form').attr('aria-label') === undefined || form.parent().find('.alert-an-form').attr('aria-label') === '') {
                // Add aria-label to alert ".alert-an-form"
                form.parent().find('.alert-an-form').attr('aria-label', 'Form Alert');
            }
        }

        // Turn off autocomplete for all forms
        form.attr('autocomplete', 'off');
        // Turn off spellcheck for all forms
        form.attr('spellcheck', 'false');

        // Turn off autocomplete for all inputs
        inputs.attr('autocomplete', 'off');
        // Turn off spellcheck for all inputs
        inputs.attr('spellcheck', 'false');

        // Add BOT Protection if not exist
        if (form.find('#bot').length === 0) {
            form.prepend('<input type="text" name="bot" id="bot" class="noview">');
        }

        // Check if there is input type file exist
        if (form.find('input[type="file"]').length) {
            // Check if this has attribute enctype
            if (form.attr('enctype') === undefined || form.attr('enctype') === '') {
                // Set enctype attribute
                form.attr('enctype', 'multipart/form-data');
            }
        }

        function checkRequired() {
            // if (form.find('input:required, select:required, textarea:required').filter(function () {
            //     return $(this).val() === '' || $(this).attr('class').includes('is-invalid');
            // }).length === 0) {
            //     // Disable submit button only inside form
            //     buttonSubmit.attr('disabled', false);
            // } else {
            //     buttonSubmit.attr('disabled', true);
            // }
            // Check if all fields (input/textarea/select) is required are filled or if field is not required but has parents .form-check-required and this field not checked
            if (form.find('input, select, textarea').filter(function () {
                if (!$(this).prop('required') && $(this).closest('.form-check-required').length) {
                    // Check if this field is checkbox or radio
                    if ($(this).attr('type') == 'checkbox' || $(this).attr('type') == 'radio') {
                        return $(this).closest('.form-check-required').find('input:checkbox:checked, input:radio:checked').length === 0;
                    } else {
                        return false;
                    }
                } else {
                    return $(this).prop('required') && $(this).val() === '' || $(this).prop('required') && $(this).attr('class').includes('is-invalid');
                }
            }).length === 0) {
                // Enable submit button if all required input is filled
                buttonSubmit.attr('disabled', false);
            } else {
                // Disable submit button
                buttonSubmit.attr('disabled', true);
            }
        }
        function checkRequiredInValidation() {
            // if (form.find('input:required, select:required, textarea:required').filter(function () {
            //     return $(this).val() === '' || $(this).attr('class').includes('is-invalid');
            // }).length === 0) {
            //     // Disable submit button only inside form
            //     buttonSubmit.attr('disabled', false);
            // }
            // Check if all fields (input/textarea/select) is required are filled or if field is not required but has parents .form-check-required and this field not checked
            if (form.find('input, select, textarea').filter(function () {
                if (!$(this).prop('required') && $(this).closest('.form-check-required').length) {
                    // Check if this field is checkbox or radio
                    if ($(this).attr('type') == 'checkbox' || $(this).attr('type') == 'radio') {
                        return $(this).closest('.form-check-required').find('input:checkbox:checked, input:radio:checked').length === 0;
                    } else {
                        return false;
                    }
                } else {
                    return $(this).prop('required') && $(this).val() === '' || $(this).prop('required') && $(this).attr('class').includes('is-invalid');
                }
            }).length === 0) {
                // Enable submit button if all required input is filled
                buttonSubmit.attr('disabled', false);
            }
        }

        // Input Validation
        inputs.each(function () {
            var input = $(this);
            var inputName = input.attr('name');
            var formGroup = input.closest('.form-group, .an-group');

            // Add Validation to input that has attribute [required] on keyup
            if (input.attr('required') !== undefined) {
                // Find label for input and add asterisk
                var label = form.find('label[for="' + inputName + '"]');
                // Check if label child sup exists
                label.each(function () {
                    if ($(this).find('sup').length == 0) {
                        // Check if label has parent .form-floating
                        if ($(this).parents().hasClass('form-floating')) {
                            // Add asterisk before label
                            $(this).prepend('<sup style="color:red;">*</sup>');
                        } else {
                            // Add asterisk after label
                            $(this).append('<sup style="color:red;">*</sup>');
                        }
                    }
                });
                // On keyup & change for input or textarea
                input.on('keyup', function () {
                    if (input.val().length > 0 && input.is(':valid')) {
                        input.removeClass('is-invalid');
                        input.addClass('is-valid');
                    } else {
                        input.addClass('is-invalid');
                        input.removeClass('is-valid');
                    }
                    checkRequired();
                });
            } else {
                input.on('keyup', function () {
                    if (input.val().length > 0) {
                        input.addClass('is-valid');
                    } else {
                        input.removeClass('is-valid');
                    }
                });
            }

            // Disable space on input [data-whitespace="false"] and from copy paste whitespace/space
            if ($(this).attr('data-whitespace') == 'false') {
                // Check if label exists
                if (formGroup.find('label').length) {
                    // Check if label parent has class .input-group, .form-floating
                    if (formGroup.find('label').parent().hasClass('input-group') || formGroup.find('label').parent().hasClass('form-floating')) {
                        // Add Whitespace Validation Element on first child of .form-group or .an-group
                        formGroup.prepend('<small class="an-whitespace-validation"></small>');
                    } else {
                        // Add Whitespace Validation Element after label
                        formGroup.find('label').after('<small class="an-whitespace-validation"></small>');
                    }
                } else {
                    // Add Phone Validation Element on first child of .form-group or .an-group
                    formGroup.prepend('<small class="an-whitespace-validation"></small>');
                }
                var whitespace_validation = formGroup.find('.an-whitespace-validation');
                // Set Text Whitespace Validation
                whitespace_validation.text('Space not allowed');
                // Whitespace Validation css
                whitespace_validation.css(badgeCss);
                // Add background color to Whitespace Validation Element
                whitespace_validation.css('background-color', dangerBg);
                // Hide Whitespace Validation Element First
                whitespace_validation.hide();
                $(this).on('keypress', function (e) {
                    if (e.which == 32) {
                        // Show Whitespace Validation Element
                        whitespace_validation.show();
                        // Set Timeout to hide Whitespace Validation Element
                        setTimeout(function () {
                            whitespace_validation.fadeOut('slow', function () { $(this).hide(); });
                        }, 1500);
                        return false;
                    }
                });

                $(this).on('paste', function (e) {
                    var text = e.originalEvent.clipboardData.getData('text');
                    if (text.match(/\s/g)) {
                        // Show Whitespace Validation Element
                        whitespace_validation.show();
                        // Set Timeout to hide Whitespace Validation Element
                        setTimeout(function () {
                            whitespace_validation.fadeOut('slow', function () { $(this).hide(); });
                        }, 1500);
                        e.preventDefault();
                    }
                });
            }

            // Only allow number on input [data-number="true"] and from copy paste number
            if ($(this).attr('data-number') == 'true') {
                // Check if label exists
                if (formGroup.find('label').length) {
                    // Check if label parent has class .input-group, .form-floating
                    if (formGroup.find('label').parent().hasClass('input-group') || formGroup.find('label').parent().hasClass('form-floating')) {
                        // Add Number Validation Element on first child of .form-group or .an-group
                        formGroup.prepend('<small class="an-number-validation"></small>');
                    } else {
                        // Add Number Validation Element after label
                        formGroup.find('label').after('<small class="an-number-validation"></small>');
                    }
                } else {
                    // Add Phone Validation Element on first child of .form-group or .an-group
                    formGroup.prepend('<small class="an-number-validation"></small>');
                }
                var number_validation = formGroup.find('.an-number-validation');
                // Set Text Number Validation
                number_validation.text('Only number allowed');
                // Number Validation css
                number_validation.css(badgeCss);
                // Add background color to Number Validation Element
                number_validation.css('background-color', dangerBg);
                // Hide Number Validation Element First
                number_validation.hide();
                $(this).on('keydown', function (e) {
                    var charCode = e.which || e.keyCode; // this deprecated but still works.

                    if (charCode >= 48 && charCode <= 57) {
                        number_validation.hide();
                    } else {
                        number_validation.show();
                        // Set Timeout to hide Number Validation Element
                        setTimeout(function () {
                            number_validation.fadeOut('slow', function () { $(this).hide(); });
                        }, 1500);
                    }
                    return (charCode >= 48 && charCode <= 57);
                });
            }

            // Add Email Validation to input[type=email] that has a [data-email-validation=true]
            if ($(this).is('[type="email"]')) {
                if ($(this).attr('data-email-validation') === 'true') {
                    // Get custom domain from data-email-domain attribute
                    var emailDomain = $(this).attr('data-email-domain');
                    // Check if data-email-domain is not set
                    if (emailDomain == undefined || emailDomain == '') {
                        // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        // Any domain allowed
                        var emailRegexp = new RegExp('^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@([a-z0-9-]+\\.)+[a-z]{2,}$', 'im');
                    } else {
                        // Remove space from emailDomain
                        emailDomain = emailDomain.replace(/\s/g, '');
                        // Remove @ from emailDomain
                        emailDomain = emailDomain.replace(/@/g, '');
                        var emailRegexp = '';
                        // Check if data-email-domain has multiple domain separated by comma
                        if (emailDomain.indexOf(',') > -1) {
                            // Get each domain
                            var emailDomainSplit = emailDomain.split(',');
                            // Wrap each domain with pipe () and join them with pipe
                            var emailDomainJoin = emailDomainSplit.map(function (x) { return '(' + x + ')'; }).join('|');
                            // Create new RegExp with custom domain
                            emailRegexp = new RegExp('^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@(' + emailDomainJoin + ')$', 'im');
                        } else {
                            // Create new RegExp with custom domain
                            emailRegexp = new RegExp('^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@(' + emailDomain + ')$', 'im');
                        }
                    }

                    // Check if label exists
                    if (formGroup.find('label').length) {
                        // Check if label parent has class .input-group, .form-floating
                        if (formGroup.find('label').parent().hasClass('input-group') || formGroup.find('label').parent().hasClass('form-floating')) {
                            // Add Email Validation Element on first child of .form-group or .an-group
                            formGroup.prepend('<small class="an-email-validation"></small>');
                        } else {
                            // Add Email Validation Element after label
                            formGroup.find('label').after('<small class="an-email-validation"></small>');
                        }
                    } else {
                        // Add Email Validation Element on first child of .form-group or .an-group
                        formGroup.prepend('<small class="an-email-validation"></small>');
                    }
                    var email_validation = formGroup.find('.an-email-validation');
                    // Email Validation css
                    email_validation.css(badgeCss);
                    // Hide Email Validation Element First
                    email_validation.hide();

                    // Check if value match with pattern on keyup & blur
                    $(this).on('keyup change blur', function () {
                        if ($(this).val().length > 0) {
                            if (emailRegexp.test($(this).val())) {
                                $(this).removeClass('is-invalid');
                                $(this).addClass('is-valid');
                                email_validation.css('background-color', successBg);
                                email_validation.text('Email valid');
                                email_validation.show();
                                // If not required
                                if ($(this).attr('required') === undefined) {
                                    checkRequiredInValidation();
                                }
                                setTimeout(function () {
                                    email_validation.fadeOut('slow', function () { $(this).hide(); });
                                }, 1500);
                            } else {
                                $(this).removeClass('is-valid');
                                $(this).addClass('is-invalid');
                                email_validation.css('background-color', dangerBg);
                                email_validation.text('Email not valid');
                                email_validation.show();
                                // Disable submit button
                                buttonSubmit.attr('disabled', true);
                            }
                        } else {
                            email_validation.css('background-color', defaultBg);
                            $(this).removeClass('is-valid');
                            email_validation.text('');
                            email_validation.hide();
                            // If not required
                            if ($(this).attr('required') === undefined) {
                                $(this).removeClass('is-invalid');
                                checkRequiredInValidation();
                            }
                        }
                    });
                }

            }

            // Check if input type is url
            if ($(this).is('[type="url"]')) {
                // Check if has attribute data-url-validation="true"
                if ($(this).attr('data-url-validation') == 'true') {
                    // Check if label exists
                    if (formGroup.find('label').length) {
                        // Check if label parent has class .input-group, .form-floating
                        if (formGroup.find('label').parent().hasClass('input-group') || formGroup.find('label').parent().hasClass('form-floating')) {
                            // Add URL Validation Element on first child of .form-group or .an-group
                            formGroup.prepend('<small class="an-url-validation"></small>');
                        } else {
                            // Add URL Validation Element after label
                            formGroup.find('label').after('<small class="an-url-validation"></small>');
                        }
                    } else {
                        // Add URL Validation Element on first child of .form-group or .an-group
                        formGroup.prepend('<small class="an-url-validation"></small>');
                    }
                    var url_validation = formGroup.find('.an-url-validation');
                    // Url validation css
                    url_validation.css(badgeCss);
                    // Hide URL Validation Element First
                    url_validation.hide();
                    // Check if value is valid url
                    $(this).on('keyup change blur', function () {
                        if ($(this).val().length > 0) {
                            if (isUrl($(this).val())) {
                                $(this).removeClass('is-invalid');
                                $(this).addClass('is-valid');
                                url_validation.css('background-color', successBg);
                                url_validation.text('Url valid');
                                url_validation.show();
                                // If not required
                                if ($(this).attr('required') === undefined) {
                                    checkRequiredInValidation();
                                }
                                setTimeout(function () {
                                    url_validation.fadeOut('slow', function () { $(this).hide(); });
                                }, 1500);
                            } else {
                                $(this).removeClass('is-valid');
                                $(this).addClass('is-invalid');
                                url_validation.css('background-color', dangerBg);
                                url_validation.text('Url not valid');
                                url_validation.show();
                                // Disable submit button
                                buttonSubmit.attr('disabled', true);
                            }
                        } else {
                            url_validation.css('background-color', defaultBg);
                            $(this).removeClass('is-valid');
                            url_validation.text('');
                            url_validation.hide();
                            // If not required
                            if ($(this).attr('required') === undefined) {
                                $(this).removeClass('is-invalid');
                                checkRequiredInValidation();
                            }
                        }
                    });

                    // Check if value is valid url
                    function isUrl(s) {
                        // // URL must start with http:// or https:// or www. or http://www. or https://www.
                        // var regexp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

                        // URL can be filled with only domain name without http:// or https:// or www. or http://www. or https://www.
                        var regexp = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;
                        // Whats mean of g or i or m etc?
                        // g: global. All matches (don't return after first match)
                        // i: insensitive. Case insensitive match (ignores case of [a-zA-Z])
                        // m: multiline. ^ and $ match start/end of line
                        // s: single line. Dot matches newline characters
                        // u: unicode. Treat pattern as a sequence of unicode code points
                        // y: sticky. Matches only from the index indicated by the lastIndex property of this regular expression in the target string (and does not attempt to match from any later indexes).

                        return regexp.test(s);
                    }
                }
            }

            // Add Phone Validation to input[type=tel] or input[type=text] that has a [data-phone-validation=true] and force to only numbers
            if ($(this).is('[type="tel"]') || $(this).is('[type="text"]')) {
                if ($(this).attr('data-phone-validation') === 'true') {
                    var codeArea = $(this).attr('data-code-area');
                    var regexp = $(this).attr('data-regexp');
                    // Check if data-regexp is not set then user default regex and add default pattern to this attribute
                    if ($(this).attr('data-regexp') == undefined || $(this).attr('data-regexp') == '') {
                        // Set Default Regex
                        var regexp = '^\\+?[\\(]?[0-9]{3}[\\)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,8}$';
                    }
                    if (codeArea !== undefined && codeArea !== '') {
                        var phoneRegexp = new RegExp('^\\+?' + codeArea + '[\\(]?[0-9]{3}[\\)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,8}$', 'im');
                    } else {
                        var phoneRegexp = new RegExp(regexp, 'im');
                    }
                    // Check if label exists
                    if (formGroup.find('label').length) {
                        // Check if label parent has class .input-group, .form-floating
                        if (formGroup.find('label').parent().hasClass('input-group') || formGroup.find('label').parent().hasClass('form-floating')) {
                            // Add Phone Validation Element on first child of .form-group or .an-group
                            formGroup.prepend('<small class="an-phone-validation"></small>');
                        } else {
                            // Add Phone Validation Element after label
                            formGroup.find('label').after('<small class="an-phone-validation"></small>');
                        }
                    } else {
                        // Add Phone Validation Element on first child of .form-group or .an-group
                        formGroup.prepend('<small class="an-phone-validation"></small>');
                    }
                    var phone_validation = formGroup.find('.an-phone-validation');
                    // Phone Validation css
                    phone_validation.css(badgeCss);
                    // Hide Phone Validation Element First
                    phone_validation.hide();
                    // Force input only number / Only ASCII character in that range allowed
                    /* Use on attribute version
                    $(this).attr('onkeypress', 'return (event.charCode >= 48 && event.charCode <= 57)');
                    */
                    $(this).on('keypress', function (e) {
                        var charCode = e.which || e.keyCode;
                        // Check if character is number or "+"
                        if (charCode >= 48 && charCode <= 57 || charCode == 43) {
                            phone_validation.show();
                        } else {
                            phone_validation.css('background-color', dangerBg);
                            phone_validation.text('Only (+) and number allowed');
                            phone_validation.show();
                        }
                        return (charCode >= 48 && charCode <= 57 || charCode == 43);
                    });
                    // Check if value match with pattern
                    $(this).on('keyup change blur', function () {
                        var phoneValue = $(this).val();

                        // if first number is 0 and this input is required, replace it with codeArea
                        if (phoneValue.substring(0, 1) == 0 && $(this).attr('required') !== undefined) {
                            if (codeArea !== undefined && codeArea !== '') {
                                phoneValue = codeArea + phoneValue.substring(1);
                            } else {
                                phoneValue = phoneValue.substring(1);
                            }
                            $(this).val(phoneValue);
                        }

                        if ($(this).val().length > 0) {
                            if (phoneRegexp.test($(this).val())) {
                                $(this).removeClass('is-invalid');
                                $(this).addClass('is-valid');
                                phone_validation.css('background-color', successBg);
                                phone_validation.text('Number Valid');
                                phone_validation.show();
                                // If not required
                                if ($(this).attr('required') === undefined) {
                                    checkRequiredInValidation();
                                }
                                setTimeout(function () {
                                    phone_validation.fadeOut('slow', function () { $(this).hide(); });
                                }, 1500);
                            } else {
                                $(this).removeClass('is-valid');
                                $(this).addClass('is-invalid');
                                phone_validation.css('background-color', dangerBg);
                                if ($(this).attr('required') === undefined && $(this).val().length > 0) {
                                        // If this input is not required and has value and first number is not equal with codeArea or not equal with +codeArea
                                        if (codeArea && phoneValue.substring(0, codeArea.length) !== codeArea && phoneValue.substring(0, codeArea.length + 1) !== '+' + codeArea) {
                                            phone_validation.text('Not Valid (Must start with ' + codeArea + ' or +' + codeArea + ')');
                                        } else {
                                            phone_validation.text('Not Valid');
                                        }
                                } else {
                                    phone_validation.text('Not Valid');
                                }
                                phone_validation.show();
                                // Disable submit button
                                buttonSubmit.attr('disabled', true);
                            }
                        } else {
                            phone_validation.css('background-color', defaultBg);
                            $(this).removeClass('is-valid');
                            phone_validation.text('');
                            phone_validation.hide();
                            // If not required
                            if ($(this).attr('required') === undefined) {
                                $(this).removeClass('is-invalid');
                                checkRequiredInValidation();
                            }
                        }
                    });
                }
            }

            // Add Password Validation to input[type=password] that has a sibling with class .confirm-password | Add Toggle Password Button to input[type=password] that has a [data-toggle-password=true] | Add Password Strength Meter to input[type=password] that has a [data-password-strength=true] and validate from [data-regexp]
            if ($(this).is('[type="password"]')) {
                // Confirm Password Validation
                if ($(this).attr('id') == 'an-confirm-password' || $(this).hasClass('an-confirm-password')) {
                    // Remove .password-strength, .password-strength-data, this attribute data-password-strength, data-regexp
                    $(this).removeAttr('data-password-strength');
                    $(this).removeAttr('data-regexp');
                    // Check if label exists
                    if (formGroup.find('label').length) {
                        // Check if label parent has class .input-group, .form-floating
                        if (formGroup.find('label').parent().hasClass('input-group') || formGroup.find('label').parent().hasClass('form-floating')) {
                            // Add Password Validation Element on first child of .form-group or .an-group
                            formGroup.prepend('<small class="an-password-validation"></small>');
                        } else {
                            // Add Password Validation Element after label
                            formGroup.find('label').after('<small class="an-password-validation"></small>');
                        }
                    } else {
                        // Add Password Validation Element on first child of .form-group or .an-group
                        formGroup.prepend('<small class="an-password-validation"></small>');
                    }
                    var password_validations = formGroup.find('.an-password-validation');
                    // Hide Password Validation Element First
                    password_validations.hide();
                    // Password Validation css
                    password_validations.css(badgeCss);

                    // Validate this value must same with other input[type=password] that are not #an-confirm-password or .an-confirm-password
                    $(this).on('keyup', function () {
                        if ($(this).val() !== '') {
                            if ($(this).val() === $('.an-password').val()) {
                                $(this).removeClass('is-invalid');
                                $(this).addClass('is-valid');
                                // If not required
                                if ($(this).attr('required') === undefined) {
                                    checkRequiredInValidation();
                                } else {
                                    // Enable submit button
                                    buttonSubmit.attr('disabled', false);
                                }
                                password_validations.css('background-color', successBg);
                                password_validations.text('Match');
                                password_validations.show();
                                setTimeout(function () {
                                    password_validations.fadeOut('slow', function () { $(this).hide(); });
                                }, 1500);
                            } else {
                                $(this).removeClass('is-valid');
                                $(this).addClass('is-invalid');
                                // Disable submit button
                                buttonSubmit.attr('disabled', true);
                                password_validations.css('background-color', dangerBg);
                                password_validations.text('Not Match');
                                password_validations.show();
                            }
                        } else {
                            $(this).removeClass('is-valid');
                            // If not required
                            if ($(this).attr('required') === undefined) {
                                $(this).removeClass('is-invalid');
                                checkRequiredInValidation();
                            }
                            password_validations.css('background-color', defaultBg);
                            password_validations.text('');
                        }
                    });
                    if ($(this).hasClass('is-valid')) {
                        // If not required
                        if ($(this).attr('required') === undefined) {
                            checkRequiredInValidation();
                        } else {
                            // Enable submit button
                            buttonSubmit.attr('disabled', false);
                        }
                        password_validations.css('background-color', successBg);
                        password_validations.text('Match');
                        password_validations.show();
                        setTimeout(function () {
                            password_validations.fadeOut('slow', function () { $(this).hide(); });
                        }, 1500);
                    } else if ($(this).hasClass('is-invalid')) {
                        // Disable submit button
                        buttonSubmit.attr('disabled', true);
                        password_validations.css('background-color', dangerBg);
                        password_validations.text('Not Match');
                        password_validations.show();
                    } else {
                        password_validations.css('background-color', defaultBg);
                        password_validations.text('');
                        password_validations.hide();
                    }
                }
                // Password Strength Meter
                if ($(this).attr('data-password-strength') == 'true') {
                    // Check if label exists
                    if (formGroup.find('label').length) {
                        // Check if label parent has class .input-group, .form-floating
                        if (formGroup.find('label').parent().hasClass('input-group') || formGroup.find('label').parent().hasClass('form-floating')) {
                            // Add Password Strength Element on first child of .form-group or .an-group
                            formGroup.prepend('<small class="an-password-strength"></small>');
                            // Add Password Strength Info Element
                            formGroup.find('.an-password-strength').after('<div class="an-password-strength-data"></div>');
                        } else {
                            // Add Password Strength Element after label
                            formGroup.find('label').after('<small class="an-password-strength"></small>');
                            // Add Password Strength Info Element
                            formGroup.find('.an-password-strength').after('<div class="an-password-strength-data"></div>');
                        }
                    } else {
                        // Add Password Strength Element on first child of .form-group or .an-group
                        formGroup.prepend('<small class="an-password-strength"></small>');
                        // Add Password Strength Info Element
                        formGroup.find('.an-password-strength').after('<div class="an-password-strength-data"></div>');
                    }
                    var password_strength = formGroup.find('.an-password-strength');
                    var password_info = formGroup.find('.an-password-strength-data');
                    // Append Password Strength Info Details
                    password_info.append('<small>Password must contain at least:</small>');
                    // Append Password Strength Info List Elements
                    password_info.append('<ul class="m-0 main"><ul class="sub"></ul></ul>');
                    // Color dark/light
                    var sDarkRgb = 'var(--' + prefix + 'body-color-rgb)';
                    var sWhite = 'var(--' + prefix + 'body-bg)';
                    // Password Strength css
                    password_strength.css(badgeCss);
                    // Password Strength Info css
                    password_info.css({
                        'position': 'absolute',
                        'top': '100%',
                        'background': sWhite,
                        'padding': '1rem',
                        'border-radius': '.25rem',
                        'z-index': '3',
                        'color': 'currentColor',
                        'box-shadow': '0 0.25rem 0.5rem rgba(' + sDarkRgb + ', 0.08)',
                        'border': '1px solid currentcolor',
                        'margin-top': '0.25rem',
                    });
                    // Hide Password Strength & Password Strength Info Element First
                    password_strength.hide();
                    password_info.hide();

                    // Check if data-regexp is not set then user default regex and add default pattern to this attribute
                    if ($(this).attr('data-password-strength') == 'true' && $(this).attr('data-regexp') == undefined || $(this).attr('data-password-strength') == 'true' && $(this).attr('data-regexp') == '') {
                        // Set Default Minimum Length
                        const minLength = 8;
                        // Set Default Password Pattern (Min 8 Character with 1 Uppercase, 1 Lowercase, 1 Number, 1 Special Character)
                        var password_pattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&._-])[A-Za-z0-9$@$!%*?&._-]{' + minLength + ',}$';

                        // Add Default Pattern
                        // $(this).attr('pattern', password_pattern);
                        // Append Password Strength Info List Element Details with their class name that matches with current pattern:
                        // ! 8 characters
                        formGroup.find('.an-password-strength-data ul.main').prepend('<li><small class="character-strength">' + minLength + ' Character<span class="inc">, including:</span></small></li>');
                        // ! 1 uppercase letter
                        formGroup.find('.an-password-strength-data ul.sub').append('<li><small class="uppercase-strength">1 Uppercase</small></li>');
                        // ! 1 lowercase letter
                        formGroup.find('.an-password-strength-data ul.sub').append('<li><small class="lowercase-strength">1 Lowercase</small></li>');
                        // ! 1 number
                        formGroup.find('.an-password-strength-data ul.sub').append('<li><small class="number-strength">1 Number</small></li>');
                        // ! 1 special character
                        formGroup.find('.an-password-strength-data ul.sub').append('<li><small class="special-strength">1 Special Character</small></li>');
                        // Check if value match with pattern and add success class to each pattern
                        $(this).on('keyup', function () {
                            var password = $(this).val();
                            // var password_pattern = $(this).attr('pattern');
                            if (password.length >= minLength) {
                                password_info.find('.character-strength').css('color', successText);
                            } else {
                                password_info.find('.character-strength').css('color', dangerText);
                            }
                            if (password.match(/[A-Z]/)) {
                                password_info.find('.uppercase-strength').css('color', successText);
                            } else {
                                password_info.find('.uppercase-strength').css('color', dangerText);
                            }
                            if (password.match(/[a-z]/)) {
                                password_info.find('.lowercase-strength').css('color', successText);
                            } else {
                                password_info.find('.lowercase-strength').css('color', dangerText);
                            }
                            if (password.match(/[0-9]/)) {
                                password_info.find('.number-strength').css('color', successText);
                            } else {
                                password_info.find('.number-strength').css('color', dangerText);
                            }
                            if (password.match(/[$@$!%*?&._-]/)) {
                                password_info.find('.special-strength').css('color', successText);
                            } else {
                                password_info.find('.special-strength').css('color', dangerText);
                            }
                            if (password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/[0-9]/) && password.match(/[$@$!%*?&._-]/)) {
                                password_info.find('.inc').css('color', successText);
                            } else {
                                password_info.find('.inc').css('color', 'currentcolor');
                            }
                            if (password.length > 0) {
                                var regex = new RegExp(password_pattern);
                                if (regex.test($(this).val()) || password.match(password_pattern)) {
                                    $(this).removeClass('is-invalid');
                                    $(this).addClass('is-valid');
                                    password_strength.css('background-color', successBg);
                                    password_strength.text('Strong');
                                    password_strength.show();
                                    // If not required
                                    if ($(this).attr('required') === undefined) {
                                        checkRequiredInValidation();
                                    } else {
                                        // Check if there is confirmation password
                                        if (form.find('.an-confirm-password').length > 0) {
                                            // Check if confirmation password is valid
                                            if ($('.an-confirm-password').val() === $(this).val()) {
                                                // Enable submit button
                                                buttonSubmit.attr('disabled', false);
                                                // Add success class to confirmation password
                                                $('.an-confirm-password').removeClass('is-invalid');
                                                $('.an-confirm-password').addClass('is-valid');
                                            } else {
                                                // Disable submit button
                                                buttonSubmit.attr('disabled', true);
                                                // Add error class to confirmation password if value not match and has value
                                                if ($('.an-confirm-password').val() !== '') {
                                                    $('.an-confirm-password').removeClass('is-valid');
                                                    $('.an-confirm-password').addClass('is-invalid');
                                                    $('.an-password-validation').css('background-color', dangerBg);
                                                    $('.an-password-validation').text('Not Match');
                                                    $('.an-password-validation').show();
                                                } else {
                                                    $('.an-confirm-password').removeClass('is-invalid');
                                                    $('.an-confirm-password').removeClass('is-valid');
                                                }
                                            }
                                        } else {
                                            // Enable submit button
                                            buttonSubmit.attr('disabled', false);
                                        }
                                    }
                                    password_info.addClass('success');
                                    password_info.find('.inc').css('color',  '#fff');
                                    password_info.css({
                                        'background-color': successBg,
                                        'border-color': successText,
                                        'color': '#fff'
                                    });
                                    password_info.find('small').css('color', '#fff');
                                    formGroup.find('[class^="invalid-"]').hide();
                                    setTimeout(function () {
                                        password_info.fadeOut('slow', function () { $(this).hide(); });
                                        password_strength.hide();
                                        password_info.css('color', 'currentColor');
                                    }, 1500);
                                } else {
                                    $(this).removeClass('is-valid');
                                    $(this).addClass('is-invalid');
                                    password_strength.css('background-color', dangerBg);
                                    password_strength.text('Weak');
                                    password_strength.show();
                                    // Disable submit button
                                    buttonSubmit.attr('disabled', true);
                                    password_info.removeClass('success');
                                    password_info.find('.inc').css('color', '');
                                    password_info.css({
                                        'background-color': sWhite,
                                        'border-color': 'inherit',
                                        'color': 'currentColor'
                                    });
                                    password_info.children('small').css('color', 'currentColor');
                                    formGroup.find('[class^="invalid-"]').show();
                                    password_info.show();
                                }
                            } else {
                                password_strength.css('background-color', defaultBg);
                                $(this).removeClass('is-valid');
                                password_strength.text('');
                                password_strength.hide();
                                password_info.removeClass('success');
                                password_info.find('.inc').css('color', '');
                                password_info.css({
                                    'background-color': sWhite,
                                    'border-color': 'inherit',
                                    'color': 'currentColor'
                                });
                                password_info.children('small').css('color', 'currentColor');
                                password_info.hide();
                                // If not required
                                if ($(this).attr('required') === undefined) {
                                    formGroup.find('[class^="invalid-"]').hide();
                                    $(this).removeClass('is-invalid');
                                    checkRequiredInValidation();
                                }
                            }

                        });
                    } else {
                        // Convert each value in data-regexp="upper,min:2,number,special" to object
                        var regex_data = $(this).attr('data-regexp').split(',');
                        var regex_data_object = {};
                        for (var i = 0; i < regex_data.length; i++) {
                            var regex_data_split = regex_data[i].split(':');
                            regex_data_object[regex_data_split[0]] = regex_data_split[1];
                        }

                        // ! Check if include min:
                        if (regex_data_object.min && regex_data_object.min >= 6) {
                            var minLength = regex_data_object.min;

                            // Append this to Password Strength Info List Element Details with their class name that matches with current pattern:
                            formGroup.find('.an-password-strength-data ul.main').prepend('<li><small class="character-strength">' + minLength + ' Character<span class="inc">, and only allowed:</span></small></li>');
                        } else {
                            var minLength = 6;

                            formGroup.find('.an-password-strength-data ul.main').prepend('<li><small class="character-strength">' + minLength + ' Character<span class="inc">, and only allowed:</span></small></li>');
                        }
                        // ! Check if include upper:
                        if ($(this).attr('data-regexp').includes('upper')) {
                            var upperCase = 'A-Z';
                            var upperCase_match = new RegExp(/[A-Z]/);
                            var upperCase_pattern = '(?=.*[' + upperCase + '])';
                            // Extend and sum min{} if include upper
                            // if (regex_data_object.min) {
                            //     regex_data_object.min = parseInt(regex_data_object.min) + 1;
                            // }


                            // Append this to Password Strength Info List Element Details with their class name that matches with current pattern:
                            formGroup.find('.an-password-strength-data ul.sub').append('<li><small class="uppercase-strength">Uppercase</small></li>');
                        } else {
                            var upperCase = '';
                            var upperCase_pattern = '';
                            formGroup.find('.an-password-strength-data ul.main').append('<li style="list-style: &quot;*&quot;;font-style: italic;text-decoration: underline;"><small class="character-strength not-allowed">Uppercase Character (A-Z) not allowed</small></li>');
                        }
                        // ! Check if include lower:
                        if ($(this).attr('data-regexp').includes('lower')) {
                            var lowerCase = 'a-z';
                            var lowerCase_match = new RegExp(/[a-z]/);
                            var lowerCase_pattern = '(?=.*[' + lowerCase + '])';
                            // Extend and sum min{} if include lower
                            // if (regex_data_object.min) {
                            //     regex_data_object.min = parseInt(regex_data_object.min) + 1;
                            // }

                            // Append this to Password Strength Info List Element Details with their class name that matches with current pattern:
                            formGroup.find('.an-password-strength-data ul.sub').append('<li><small class="lowercase-strength">Lowercase</small></li>');
                        } else {
                            var lowerCase = '';
                            var lowerCase_pattern = '';
                            formGroup.find('.an-password-strength-data ul.main').append('<li style="list-style: &quot;*&quot;;font-style: italic;text-decoration: underline;"><small class="character-strength not-allowed">Lowercase Character (a-z) not allowed</small></li>');
                        }
                        // ! Check if include number:
                        if ($(this).attr('data-regexp').includes('number')) {
                            var number = '0-9';
                            var number_match = new RegExp(/[0-9]/);
                            var number_pattern = '(?=.*[' + number + '])';
                            // Extend and sum min{} if include number
                            // if (regex_data_object.min) {
                            //     regex_data_object.min = parseInt(regex_data_object.min) + 1;
                            // }

                            // Append this to Password Strength Info List Element Details with their class name that matches with current pattern:
                            formGroup.find('.an-password-strength-data ul.sub').append('<li><small class="number-strength">Number</small></li>');
                        } else {
                            var number = '';
                            var number_pattern = '';
                            formGroup.find('.an-password-strength-data ul.main').append('<li style="list-style: &quot;*&quot;;font-style: italic;text-decoration: underline;"><small class="character-strength not-allowed">Number Character (0-9) not allowed</small></li>');
                        }
                        // ! Check if include special:
                        if ($(this).attr('data-regexp').includes('special')) {
                            var special = '$@$!%*?&._-';
                            var special_match = new RegExp(/[$@$!%*?&._-]/);
                            var special_pattern = '(?=.*[' + special + '])';
                            // Extend and sum min{} if include special
                            // if (regex_data_object.min) {
                            //     regex_data_object.min = parseInt(regex_data_object.min) + 1;
                            // }

                            // Append this to Password Strength Info List Element Details with their class name that matches with current pattern:
                            formGroup.find('.an-password-strength-data ul.sub').append('<li><small class="special-strength">Special Character</small></li>');
                        } else {
                            var special = '';
                            var special_pattern = '';
                            formGroup.find('.an-password-strength-data ul.main').append('<li style="list-style: &quot;*&quot;;font-style: italic;text-decoration: underline;"><small class="character-strength not-allowed">Special Character ($@$!%*?&._-) not allowed</small></li>');
                        }

                        // // Add Default Pattern
                        // $(this).attr('pattern', '^' + lowerCase_pattern + upperCase_pattern + number_pattern + special_pattern + '[' + lowerCase + upperCase + number + special + ']{' + minLength + ',}$');

                        // Check if value match with pattern and add success class to each pattern
                        $(this).on('keyup', function () {
                            var password = $(this).val();
                            var password_pattern = '^' + lowerCase_pattern + upperCase_pattern + number_pattern + special_pattern + '[' + lowerCase + upperCase + number + special + ']{' + minLength + ',}$';
                            // console.log(password_pattern);

                            if (password.length > 0) {
                                var regex = new RegExp(password_pattern);
                                if (regex.test(password)) {
                                    password_strength.css('background-color', successBg);
                                    password_strength.text('Strong');
                                    password_strength.show();
                                } else {
                                    password_strength.css('background-color', dangerBg);
                                    password_strength.text('Weak');
                                    password_strength.show();
                                }
                            } else {
                                password_strength.css('background-color', defaultBg);
                                password_strength.text('');
                            }
                            if (password.length >= minLength) {
                                password_info.find('.character-strength:not(.not-allowed)').css('color', successText);
                            } else {
                                password_info.find('.character-strength:not(.not-allowed)').css('color', dangerText);
                            }
                            if (password.match(upperCase_match)) {
                                password_info.find('.uppercase-strength').css('color', successText);
                            } else {
                                password_info.find('.uppercase-strength').css('color', dangerText);
                            }
                            if (password.match(lowerCase_match)) {
                                password_info.find('.lowercase-strength').css('color', successText);
                            } else {
                                password_info.find('.lowercase-strength').css('color', dangerText);
                            }
                            if (password.match(number_match)) {
                                password_info.find('.number-strength').css('color', successText);
                            } else {
                                password_info.find('.number-strength').css('color', dangerText);
                            }
                            if (password.match(special_match)) {
                                password_info.find('.special-strength').css('color', successText);
                            } else {
                                password_info.find('.special-strength').css('color', dangerText);
                            }
                            if (password.match(upperCase_match) && password.match(lowerCase_match) && password.match(number_match) && password.match(special_match)) {
                                password_info.find('.inc').css('color', successText);
                            } else {
                                password_info.find('.inc').css('color', 'currentcolor');
                            }
                            if (password.match(password_pattern)) {
                                password_info.addClass('success');
                                password_info.find('.inc').css('color',  '#fff');
                                password_info.css({
                                    'background-color': successBg,
                                    'border-color': successText,
                                    'color': '#fff'
                                });
                                password_info.find('small').css('color', '#fff');
                                formGroup.find('[class^="invalid-"]').hide();
                                $(this).removeClass('is-invalid');
                                $(this).addClass('is-valid');
                                setTimeout(function () {
                                    password_info.fadeOut('slow', function () { $(this).hide(); });
                                    password_strength.hide();
                                    password_info.css('color', 'currentColor');
                                }, 1500);

                            } else {
                                password_info.removeClass('success');
                                password_info.find('.inc').css('color', 'currentcolor');
                                password_info.css({
                                    'background-color': sWhite,
                                    'border-color': 'inherit',
                                });
                                password_info.children('small').css('color', 'currentcolor');
                                password_info.find('.character-strength.not-allowed').css('color', 'currentcolor');
                                formGroup.find('[class^="invalid-"]').show();
                                password_info.show();
                            }
                        });

                    }

                    // Show Password Strength Info Element on focus
                    $(this).on('focus', function () {
                        password_info.show();

                        if (password_info.hasClass('success')) {
                            password_info.hide();
                        }
                    });
                    // Hide Password Strength Info Element on blur / not focus
                    $(this).on('blur', function () {
                        password_info.hide();
                    });
                }
                //Toggle Password Button
                if ($(this).attr('data-toggle-password') == 'true') {
                    var ClosedIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="fill:currentColor;"><path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z" /></svg>';
                    var OpenIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="fill:currentColor;"><path d="M17 8V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2zm1 4 .002 8H6v-8h12z" /></svg>';
                    // Styling Input with Toggle Password
                    $(this).css({
                        'padding-right': '2.375rem',
                    });
                    // Check if siblings has class .icon-control or not
                    if ($(this).siblings('.icon-control').length) {
                        // Add Toggle Password Element with Icon Class
                        $(this).after('<span class="toggle-password pass-closed">' + ClosedIcon + '</span>');
                        // Add Notifications password open & keep-secret
                        $(this).siblings('.icon-control').before('<small class="keep-secret">Keep secret!</small>');
                    } else {
                        // Add Toggle Password Element with Icon Class
                        $(this).after('<span class="toggle-password pass-closed">' + ClosedIcon + '</span>');
                        // Add Notifications password open & keep-secret
                        $(this).before('<small class="keep-secret">Keep secret!</small>');
                    }
                    var toggle_password = formGroup.find('.toggle-password');
                    toggle_password.css({
                        'cursor': 'pointer',
                        'display': 'block',
                        'font-size': '1.15rem',
                        'height': '2.375rem',
                        'line-height': '2.375rem',
                        'position': 'absolute',
                        'right': '0.25rem',
                        'text-align': 'center',
                        'width': '2.375rem',
                        'z-index': 2,
                        'top': '1.75rem',
                        'color': 'currentcolor'
                    });
                    var keep_secret = formGroup.find('.keep-secret');
                    keep_secret.css(badgeCss);
                    // Hide .keep-secret Element First
                    keep_secret.hide();
                    keep_secret.css({
                        'color': '#000',
                        'background-color': warningBg,
                        'position': 'absolute',
                        'right': '0px',
                    });
                    // Check if parent has class .form-floating
                    if ($(this).parent().hasClass('form-floating')) {
                        // Custom css top
                        toggle_password.css('top', '.65rem');
                    }
                    // Parent find label
                    var label = formGroup.find('label');
                    // Check if label not exists
                    if (!label.length) {
                        // Custom css top
                        toggle_password.css('top', '0');
                        keep_secret.css({
                            'top': 'auto',
                            'bottom': 'calc(100% + 0.25rem)',
                        });
                    }
                    // Toggle password visibility
                    toggle_password.on('click', function () {
                        if ($(this).hasClass('pass-closed')) {
                            $(this).removeClass('pass-closed');
                            $(this).html(OpenIcon);
                            $(this).siblings('input').attr('type', 'text');
                            // Hide .keep-secret on device width < 768px
                            if ($(window).width() < 768) {
                                keep_secret.hide();
                            } else {
                                keep_secret.show();
                            }
                        } else {
                            $(this).addClass('pass-closed');
                            $(this).html(ClosedIcon);
                            keep_secret.hide();
                            $(this).siblings('input').attr('type', 'password');
                        }
                    });
                }
            }

            // Count Character on input type text and textarea if [data-count="true"] attribute is set
            if ($(this).attr('data-count') == 'true' && $(this).is('input[type="text"]') || $(this).attr('data-count') == 'true' && $(this).is('textarea')) {
                var maxlength = $(this).attr('maxlength');
                // Check if maxlength is not set
                if (maxlength == undefined || maxlength == '') {
                    maxlength = 500;
                }
                // Check if parent has class .input-group
                if ($(this).parent().hasClass('input-group')) {
                    // Add An-counter Element append .input-group
                    formGroup.find('.input-group').append('<small class="an-counter an-counter-group" style="font-size:.75rem;color:currentColor;margin-top:.25em;position: absolute;right: 0;bottom: 0;top:100%"></small>');
                } else {
                    // Check if label exists
                    if (formGroup.find('label').length) {
                        // Add An-counter Element after label
                        formGroup.find('label').after('<small class="an-counter" style="font-size:.75rem;color:currentColor;margin-top:.25em;position: absolute;right: 0;"></small>');
                    } else {
                        // Add An-counter Element after input/textarea
                        $(this).after('<small class="an-counter" style="font-size:.75rem;color:currentColor;margin-top:.25em;position: absolute;right: 0;"></small>');
                    }
                }
                // Add An-counter Element Value
                formGroup.find('.an-counter').text('Max. 0/' + maxlength + ' character');
                // Count Character on input and textarea
                $(this).on('keyup', function () {
                    formGroup.find('.an-counter').text('Max. ' + $(this).val().length + '/' + maxlength + ' character');
                    // Add .text-danger if character is more than maxlength
                    if ($(this).val().length == maxlength) {
                        formGroup.find('.an-counter').css('color', dangerText);
                    } else {
                        formGroup.find('.an-counter').css('color', 'currentColor');
                    }
                    if ($(this).closest('.input-group').find('[data-count="true"]').hasClass('is-invalid')) {
                        $(this).closest('.input-group').find('.an-counter-group').css({'top': 'auto', 'margin-top': '0'});
                    } else {
                        $(this).closest('.input-group').find('.an-counter-group').css({'top': '100%', 'margin-top': '.25rem'});
                    }
                });

                // If input value is not empty, set an-counter value
                if ($(this).val().length > 0) {
                    formGroup.find('.an-counter').text('Max ' + $(this).val().length + '/' + maxlength + ' character');
                    if ($(this).closest('.input-group').find('[data-count="true"]').hasClass('is-invalid')) {
                        $(this).closest('.input-group').find('.an-counter-group').css({'top': 'auto', 'margin-top': '0'});
                    } else {
                        $(this).closest('.input-group').find('.an-counter-group').css({'top': '100%', 'margin-top': '.25rem'});
                    }
                }

                // Hide An-counter Element if maxlength is not set
                if (maxlength == undefined) {
                    formGroup.find('.an-counter').hide();
                    // Check if parent has class .input-group
                    if ($(this).parent().hasClass('input-group')) {
                        formGroup.find('.input-group').after('<small>Please add maxlength attribute to this input/textarea</small>');
                    } else {
                        $(this).after('<small>Please add maxlength attribute to this input/textarea</small>');
                    }
                }
            }

            // Multiple Checkbox with same name that is required
            if ($(this).is('[type="checkbox"]')) {
                // Check if there is multiple checkbox with same name
                if (formGroup.find('input[type="checkbox"][name="' + $(this).attr('name') + '"]').length > 1) {
                    // Check if name has "[]" or not
                    if (!$(this).attr('name').includes('[]')) {
                        // Add "[]" to each checkbox name with same name
                        formGroup.find('input[type="checkbox"][name="' + $(this).attr('name') + '"]').each(function() {
                            $(this).attr('name', $(this).attr('name') + '[]');
                        });
                    }
                }
                // Check if has parents with class .form-check-required
                if ($(this).parents('.form-check-required').length) {
                    var label = $(this).parents('.form-check-required').children('.form-label');
                    // Check if label has children sup
                    if (label.children('sup').length === 0) {
                        // Append sup to label
                        label.append('<sup style="color:red;">*</sup>');
                    }
                    // Get attribute data-min-check
                    var minCheck = $(this).parents('.form-check-required').data('min-check');
                    // Check if minCheck is empty
                    if (minCheck === undefined || minCheck === '') {
                        // Set minCheck to 1
                        minCheck = 1;
                    }
                    // Find invalid feedback
                    var invalidFeedback = $(this).parents('.form-check-required').find('[class^="invalid-"]');
                    // Check if minCheck is not empty
                    if (minCheck !== undefined && minCheck !== '') {
                        // Check if invalid feedback is exist
                        if (invalidFeedback.length === 0) {
                            // Append invalid feedback
                            $(this).parents('.form-check-required').append('<div class="' + invalidType + '">Please select at least ' + minCheck + ' option</div>');
                        }
                        // On change
                        $(this).on('change', function() {
                            var totalChecked = $(this).parents('.form-check-required').find('input[type="checkbox"]:checked').length;
                            // Check if totalChecked is less than minCheck
                            if (totalChecked < minCheck) {
                                // Set is-invalid class to parents
                                $(this).parents('.form-check-required').addClass('is-invalid');
                                // Disable submit button
                                form.find('[type="submit"]').attr('disabled', true);
                            } else {
                                // Remove is-invalid class from parents
                                $(this).parents('.form-check-required').removeClass('is-invalid');
                                // Enable submit button if all required input is filled
                                if (form.find('input:required, select:required, textarea:required').filter(function() {
                                    return $(this).val() === '' || $(this).attr('class').includes('is-invalid');
                                }).length === 0) {
                                    buttonSubmit.attr('disabled', false);
                                }
                                // // Get all checked value
                                // var checkedValue = [];
                                // $(this).parents('.form-check-required').find('input[type="checkbox"]:checked').each(function() {
                                //     checkedValue.push($(this).val());
                                // });
                                // // Convert checkedValue to string
                                // checkedValue = checkedValue.join(',');
                                // checkedValue = checkedValue.replace(/,([^,]*)$/, ' and $1');
                                // // console.log(checkedValue);
                            }
                        });
                    }
                }
            }

            // Multiple Radio with same name that is required
            if ($(this).is('[type="radio"]')) {
                if ($(this).attr('required') !== undefined) {
                    // Check if form-group has class .form-check-required or not
                    if (!formGroup.hasClass('form-check-required')) {
                        // Add class .form-check-required to form-group
                        formGroup.addClass('form-check-required');
                    }
                }
                setTimeout(function() {
                    // Check if has parents with class .form-check-required or this has attribute required
                    if ($(this).parents('.form-check-required').length) {
                        var label = $(this).parents('.form-check-required').children('.form-label');
                        // Check if label has children sup
                        if (label.children('sup').length === 0) {
                            // Append sup to label
                            label.append('<sup style="color:red;">*</sup>');
                        }
                        // Find invalid feedback
                        var invalidFeedback = $(this).parents('.form-check-required').find('[class^="invalid-"]');
                        // Check if invalid feedback is exist
                        if (invalidFeedback.length === 0) {
                            // Append invalid feedback
                            $(this).parents('.form-check-required').append('<div class="' + invalidType + '">Please select one of these options</div>');
                        }
                        var $this = $(this);
                        // On click submit button
                        form.find('[type="submit"]').on('click', function() {
                            // Check if input type radio is checked or not
                            if ($this.parents('.form-check-required').find('input[type="radio"]:checked').length === 0) {
                                // Set is-invalid class to parents
                                $this.parents('.form-check-required').addClass('is-invalid');
                                // Disable submit button
                                form.find('[type="submit"]').attr('disabled', true);
                            } else {
                                // Remove is-invalid class from parents
                                $this.parents('.form-check-required').removeClass('is-invalid');
                                // Enable submit button if all required input is filled
                                if (form.find('input:required, select:required, textarea:required').filter(function() {
                                    return $(this).val() === '' || $(this).attr('class').includes('is-invalid');
                                }).length === 0) {
                                    buttonSubmit.attr('disabled', false);
                                }
                            }
                        });
                        // On change
                        $(this).on('change blur', function() {
                            // Check if input type radio is checked or not
                            if ($(this).parents('.form-check-required').find('input[type="radio"]:checked').length === 0) {
                                // Set is-invalid class to parents
                                $(this).parents('.form-check-required').addClass('is-invalid');
                                // Disable submit button
                                form.find('[type="submit"]').attr('disabled', true);
                            } else {
                                // Remove is-invalid class from parents
                                $(this).parents('.form-check-required').removeClass('is-invalid');
                                // Enable submit button if all required input is filled
                                if (form.find('input:required, select:required, textarea:required').filter(function() {
                                    return $(this).val() === '' || $(this).attr('class').includes('is-invalid');
                                }).length === 0) {
                                    buttonSubmit.attr('disabled', false);
                                }
                            }
                        });
                    }
                }.bind(this), 1000);
            }

            // File Input
            if ($(this).is('[type="file"]')) {
                if ($(this).attr('data-file-validation') === 'true') {
                    // On change
                    $(this).on('change', function() {
                        var $this = $(this);
                        // Find invalid feedback
                        var $invalidFeedback = formGroup.find('[class^="invalid-"]');
                        // Check if invalid feedback is exist
                        if ($invalidFeedback.length === 0) {
                            // Append invalid feedback
                            formGroup.append('<div class="' + invalidType + '"></div>');
                        }
                        // Get accept attribute
                        var accept = $(this).attr('accept');
                        // Convert accept to readable format array
                        accept = accept.split(',').map(function(item) {
                            return item.trim().replace('.', '');
                        });
                        // Check if accept contains image/* or video/* or audio/*
                        // Convert to readable format. Example: image/* to 'jpg', 'jpeg', 'png', 'gif', 'webp'. etc.
                        if (accept.includes('image/*')) {
                            // Extend accept
                            accept = accept.concat(['jpg', 'jpeg', 'png', 'gif', 'webp']);
                        }
                        if (accept.includes('video/*')) {
                            // Extend accept
                            accept = accept.concat(['mp4', 'webm', 'ogg', 'mov', 'avi', 'wmv', 'flv', 'mkv', '3gp']);
                        }
                        if (accept.includes('audio/*')) {
                            // Extend accept
                            accept = accept.concat(['mp3', 'wav', 'ogg', 'aac', 'wma', 'flac', 'alac', 'aiff', 'm4a']);
                        }
                        if (accept.includes('application/*')) {
                            // Extend accept
                            accept = accept.concat(['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'zip', 'rar', 'apk', 'exe', 'txt', 'csv', 'json', 'xml', 'html', 'css', 'js', 'php', 'sql', 'psd', 'ai', 'eps', 'ps', 'ttf', 'otf', 'woff', 'woff2', 'eot', 'svg', 'ico', 'dwg', 'dxf', 'svgz', '3ds', 'max', 'blend', 'obj', 'stl', 'fbx', 'dae', 'glb', 'gltf', '3dm', '3mf', 'step', 'stp', 'skp', 'sketch']);
                        }
                        // Remove image/*, video/*, audio/*, application/* from accept
                        accept = accept.filter(function(item) {
                            return item !== 'image/*' && item !== 'video/*' && item !== 'audio/*' && item !== 'application/*';
                        });
                        // console.log(accept);
                        // Get multiple attribute
                        var multiple = $(this).attr('multiple');
                        // Get max file size
                        var maxFileSize = $(this).data('max-size');
                        // Get max size unit
                        var maxSizeUnit = $(this).data('max-size-unit');
                        // Get invalid size message
                        var invalidSizeMessage = $(this).data('invalid-size-message');
                        // Get invalid type message
                        var invalidTypeMessage = $(this).data('invalid-type-message');
                        // Compare selected file with each attribute
                        $.each(this.files, function(index, file) {
                            // Index start from 0
                            index = index + 1;
                            // Check if maxFileSize is not empty
                            if (maxFileSize !== undefined && maxFileSize !== '') {
                                // Check if maxSizeUnit is not empty
                                if (maxSizeUnit !== undefined && maxSizeUnit !== '') {
                                    // Make lowercase maxSizeUnit
                                    maxSizeUnit = maxSizeUnit.toLowerCase();
                                    // Check maxSizeUnit value. Example: TB, GB, MB, KB
                                    if (maxSizeUnit === 'tb') {
                                        // Convert maxFileSize to TB
                                        maxFileSize = maxFileSize * 1024 * 1024 * 1024 * 1024;
                                    } else if (maxSizeUnit === 'gb') {
                                        // Convert maxFileSize to GB
                                        maxFileSize = maxFileSize * 1024 * 1024 * 1024;
                                    } else if (maxSizeUnit === 'mb') {
                                        // Convert maxFileSize to MB
                                        maxFileSize = maxFileSize * 1024 * 1024;
                                    } else if (maxSizeUnit === 'kb') {
                                        // Convert maxFileSize to KB
                                        maxFileSize = maxFileSize * 1024;
                                    } else {
                                        // Convert maxFileSize to B
                                        maxFileSize = maxFileSize;
                                    }
                                }
                                // Get file size from file
                                var fileSize = file.size;
                                // Check if file size is more than maxFileSize
                                if (fileSize > maxFileSize) {
                                    $invalidFeedback.text(invalidSizeMessage);
                                    // Set is-invalid class to parents
                                    $this.addClass('is-invalid');
                                    // Reset input file
                                    $this.val('');
                                    // Disable submit button
                                    form.find('[type="submit"]').attr('disabled', true);
                                    // Return false
                                    return false;
                                } else {
                                    // Remove invalid size message
                                    $invalidFeedback.text('');
                                    // Remove is-invalid class from parents
                                    $this.removeClass('is-invalid');
                                    checkRequiredInValidation();
                                }
                            }
                            // Check if accept is not empty
                            if (accept !== undefined && accept !== '') {
                                // Get file extension from file name
                                var fileExtension = file.name.split('.').pop().toLowerCase();
                                // Check if file extension is not in accept
                                if (!accept.includes(fileExtension)) {
                                    $invalidFeedback.text(invalidTypeMessage);
                                    // Set is-invalid class to parents
                                    $this.addClass('is-invalid');
                                    // Reset input file
                                    $this.val('');
                                    // Disable submit button
                                    form.find('[type="submit"]').attr('disabled', true);
                                    // Return false
                                    return false;
                                } else {
                                    // Remove invalid type message
                                    $invalidFeedback.text('');
                                    // Remove is-invalid class from parents
                                    $this.removeClass('is-invalid');
                                    checkRequiredInValidation();
                                }
                            }
                        });
                    });
                }
                var droppable = $(this).data('droppable');
                if (droppable === true) {
                    // Check if droppable-area is exist
                    if ($(this).parent().hasClass('an-droppable-area')) {
                        return false;
                    }
                    var droppableBtnText = $(this).data('droppable-btn-text');
                    var droppableMsgText = $(this).data('droppable-msg-text');
                    if (droppable === undefined || droppable === '') {
                        droppable = false;
                    }
                    if (droppableBtnText === undefined || droppableBtnText === '') {
                        droppableBtnText = 'Choose Files';
                    }
                    if (droppableMsgText === undefined || droppableMsgText === '') {
                        droppableMsgText = 'or drop files here';
                    }
                    var DropArea = 'an-droppable-area';
                    var DropBtn = '<span class="an-droppable-btn btn btn-primary">' + droppableBtnText + '</span>';
                    var DropMsg = '<span class="an-droppable-msg">' + droppableMsgText + '</span>';
                    var DropDelete = '<div class="an-droppable-item-delete"></div>';
                    $(this).addClass('an-droppable-input');

                    // Wrap input file with div
                    $(this).wrap('<div class="' + DropArea + '"></div>');
                    // Add drop button & drop message
                    $(this).before(DropBtn + DropMsg);
                    // Add delete button
                    $(this).after(DropDelete);
                    var $fileInput = $('.an-droppable-input');
                    var $droparea = $('.an-droppable-area');
                    var $delete = $('.an-droppable-item-delete');

                    $fileInput.on('dragenter focus click', function () {
                        $droparea.addClass('is-active');
                    });

                    $fileInput.on('dragleave blur drop', function () {
                        $droparea.removeClass('is-active');
                    });

                    $fileInput.on('change', function () {
                        // Check if this has class 'is-invalid'
                        if ($(this).hasClass('is-invalid')) {
                            // Add class 'is-invalid' to droparea
                            $droparea.addClass('is-invalid');
                            $droparea.removeClass('is-valid');
                            $droparea.removeClass('is-active');
                        } else {
                            // Remove class 'is-invalid' to droparea
                            $droparea.removeClass('is-invalid');
                        }
                        // Check if this has class 'is-valid'
                        if ($(this).hasClass('is-valid')) {
                            // Add class 'is-valid' to droparea
                            $droparea.addClass('is-valid');
                            $droparea.removeClass('is-invalid');
                        } else {
                            // Remove class 'is-valid' to droparea
                            $droparea.removeClass('is-valid');
                        }

                        let filesCount = $(this)[0].files.length;
                        let $textContainer = $(this).prev();

                        if (filesCount === 1) {
                            let fileName = $(this).val().split('\\').pop();
                            $textContainer.text(fileName);
                            $delete.css('display', 'inline-block');
                        } else if (filesCount === 0) {
                            $textContainer.text(droppableMsgText);
                            $delete.css('display', 'none');
                        } else {
                            $textContainer.text(filesCount + ' files selected');
                            $delete.css('display', 'inline-block');
                        }
                    });

                    $delete.on('click', function () {
                        $('.an-droppable-input').val(null);
                        $('.an-droppable-msg').text(droppableMsgText);
                        $('.an-droppable-item-delete').css('display', 'none');
                    });
                }
            }

            if (formGroup.find('.form-floating').length === 0 && floatingValidation === 'true') {
                // Check if label parent has class .input-group, .form-floating
                formGroup.find('[class*="-validation"]').each(function () {
                    $(this).css('position', 'static');
                });
            }
        });
    });
};
if ($('form').length > 0) {
    ANForm();
}
/* ======== Form Submit ======== */
function uploadForm(e) {

    var form = $(e).parents('form').attr('id');
    var submitButton = $('#' + form).find('[type="submit"]');
    var submitButtonText = submitButton.text();
    var submitButtonProgressText = submitButton.data('progress-text');
    if (submitButtonProgressText === undefined || submitButtonProgressText === '') {
        submitButtonProgressText = 'Sending...';
    }
    var progress = $('#' + form).find('.an-submit-progress');
    var progressBar = progress.find('.an-submit-progress-bar');
    var alert = $('.alert-an-form#alert-' + form);
    var successMessage = $('#' + form).data('success-message');
    if (successMessage === undefined || successMessage === '') {
        successMessage = 'Thank you for your submission!';
    }
    var errorMessage = $('#' + form).data('error-message');
    if (errorMessage === undefined || errorMessage === '') {
        errorMessage = 'Something went wrong, please try again!';
    }

    $('#' + form).ajaxForm({
        // This function is for validation before submit
        beforeSend: function() {
            submitButton.attr('disabled', true);
            submitButton.html('<span class="an-loading-icon" role="status" aria-hidden="true">' + submitButtonProgressText + '</span>');
            progress.removeAttr('hidden');
            progressBar.css('width', '0%');

            // Check if .form-check-required is exist and has multiple input type checkbox with same name. This is for checkbox required
            if ($('#' + form).find('.form-check-required').length && $('#' + form).find('.form-check-required input[type="checkbox"][name="' + $('#' + form).find('.form-check-required input[type="checkbox"]').attr('name') + '"]:checked').length === 0) {
                // Add class .is-invalid to .form-check-required
                $('#' + form).find('.form-check-required').find('input[type="checkbox"]').parents('.form-check-required').addClass('is-invalid');
                // Check if .form-check-required has attribute data-min-check
                if ($('#' + form).find('.form-check-required').find('input[type="checkbox"]').parents('.form-check-required').attr('data-min-check') !== undefined && $('#' + form).find('.form-check-required').find('input[type="checkbox"]').parents('.form-check-required').attr('data-min-check') !== '') {
                    // Check if .form-check-required doesn't has class invalid feedback
                    if ($('#' + form).find('.form-check-required').find('input[type="checkbox"]').parents('.form-check-required').find('[class^="invalid-"]').length === 0) {
                        // Append invalid feedback
                        $('#' + form).find('.form-check-required').find('input[type="checkbox"]').parents('.form-check-required').append('<div class="' + invalidType + '">Please select min. ' + $('#' + form).find('.form-check-required').find('input[type="checkbox"]').parents('.form-check-required').attr('data-min-check') + ' option(s)!</div>');
                    }
                    alert.text(errorMessage);
                } else {
                    // Check if .form-check-required doesn't has class invalid feedback
                    if ($('#' + form).find('.form-check-required').find('input[type="checkbox"]').parents('.form-check-required').find('[class^="invalid-"]').length === 0) {
                        // Append invalid feedback
                        $('#' + form).find('.form-check-required').find('input[type="checkbox"]').parents('.form-check-required').append('<div class="' + invalidType + '">Please select at least one option!</div>');
                    }
                    alert.text(errorMessage);
                }
                progressBar.css('width', '50%');
                alert.removeAttr('hidden').addClass('an-alert-danger');
                setTimeout(function() {
                    progressBar.css('width', '0%');
                    alert.fadeOut('slow', function () {
                        $(this).attr('hidden', true).removeClass('an-alert-danger');
                        $(this).removeAttr('style').html('');
                        progress.attr('hidden', true);
                        submitButton.attr('disabled', false);
                        submitButton.html(submitButtonText);
                    });
                }, 3000);
                // Reset form
                return false;
            }

            // Bot Detection
            if ($('#' + form).find('input[name="bot"]').val() !== '') {
                alert.html('<strong><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor;"><path d="M21.928 11.607c-.202-.488-.635-.605-.928-.633V8c0-1.103-.897-2-2-2h-6V4.61c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5c-1.103 0-2 .897-2 2v2.997l-.082.006A1 1 0 0 0 1.99 12v2a1 1 0 0 0 1 1H3v5c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5a1 1 0 0 0 1-1v-1.938a1.006 1.006 0 0 0-.072-.455zM5 20V8h14l.001 3.996L19 12v2l.001.005.001 5.995H5z"></path><ellipse cx="8.5" cy="12" rx="1.5" ry="2"></ellipse><ellipse cx="15.5" cy="12" rx="1.5" ry="2"></ellipse><path d="M8 16h8v2H8z"></path></svg> BOT DETECTED!</strong>');
                progressBar.css('width', '50%');
                alert.removeAttr('hidden').addClass('an-alert-danger');
                setTimeout(function() {
                    progressBar.css('width', '0%');
                    alert.fadeOut('slow', function () {
                        $(this).attr('hidden', true).removeClass('an-alert-danger');
                        $(this).removeAttr('style').html('');
                        progress.attr('hidden', true);
                        submitButton.attr('disabled', false);
                        submitButton.html(submitButtonText);
                    });
                }, 3000);
                // Reset form
                return false;
            }
        },
        // This function is for progress bar
        uploadProgress: function(event, position, total, percentComplete) {
            progressBar.css('width', percentComplete + '%');
        },
        xhr: function() {
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener('progress', function(e) {
                if (e.lengthComputable) {
                    var percent = Math.round((e.loaded / e.total) * 100);
                    progressBar.css('width', percent + '%');
                }
            });
            return xhr;
        },
        success: function() {
            submitButton.attr('disabled', false);
            submitButton.html(submitButtonText);
            progressBar.css('width', '0%');
            progress.attr('hidden', true);
            alert.html(successMessage);
            alert.removeAttr('hidden').addClass('an-alert-success');
            setTimeout(function() {
                alert.fadeOut('slow', function () {
                    $(this).attr('hidden', true).removeClass('an-alert-success');
                    $(this).removeAttr('style').html('');
                });
                // Reset form
                $('#' + form).resetForm();
                // Remove class .is-invalid and .is-valid
                $('#' + form).find('.is-invalid').removeClass('is-invalid');
                $('#' + form).find('.is-valid').removeClass('is-valid');
                $('#' + form).find('.an-droppable-msg').text('or drop files here');
                $('#' + form).find('.an-droppable-item-delete').css('display', 'none');
                // Remove was-validated class
                $('#' + form).removeClass('was-validated');
                // // Reload page
                // location.reload();
            }, 3000);
            return false;
        },
        error: function(xhr, status, error) {
            submitButton.attr('disabled', false);
            submitButton.html(submitButtonText);
            progress.attr('hidden', true);
            progressBar.css('width', '0%');
            alert.html(errorMessage);
            alert.removeAttr('hidden').addClass('an-alert-danger');
            setTimeout(function() {
                alert.fadeOut('slow', function () {
                    $(this).attr('hidden', true).removeClass('an-alert-danger');
                    $(this).removeAttr('style').html('');
                });
            }, 3000);
            return false;
        }
    });
}
/*=================================================================
    SWUP Hooks
==================================================================*/
// ANShare on hooks
swup.hooks.on('page:view', () => ANShare());
swup.hooks.on('page:view', () => superfoxScript());
swup.hooks.on('page:view', () => $('.an-popup-btn') ? ANPopUp() : '');
// Hide  Offcanvas on hooks
swup.hooks.on('page:view', () => $('#super-header-menu').offcanvas('hide'));
// Back to top on hooks
swup.hooks.on('page:view', () => $('#back-to-top').length > 0 ? backToTop() : '');
// Swiper Slider on hooks
swup.hooks.on('page:view', () => $('.swiper-container').length > 0 ? swiperContainer() : '');
// Header Navbar on hooks
swup.hooks.on('page:view', () => $('#menu-header-menu').length > 0 ? headerNavbar() : '');
// Video Player on hooks
swup.hooks.on('page:view', () => $('.video-player').length > 0 ? videoPlayer() : '');
// Video Sound on hooks
swup.hooks.on('page:view', () => $('#btn-sound').length > 0 && $('.video-player').length > 0 ? videoSound() : '');
// Video Fullscreen on hooks
swup.hooks.on('page:view', () => $('#btn-fullscreen').length > 0 && $('.video-player').length > 0 ? videoFullscreen() : '');
// Pop Up Video on hooks
swup.hooks.on('page:view', () => $('#play-video').length > 0 ? popUpVideo() : '');
// Counter on hooks
swup.hooks.on('page:view', () => $('.an-count').length > 0 ? anCount() : '');
// Typing Text on hooks
swup.hooks.on('page:view', () => $('.an-typed').length > 0 ? runTyped() : '');
// Projects Grid on hooks
swup.hooks.on('page:view', () => $('#projects').length > 0 ? projectGrid() : '');
// Modal Career on hooks
swup.hooks.on('page:view', () => modalCareer());
// Show Job Detail on hooks
swup.hooks.on('page:view', () => $('#modal-career').length > 0 && $('#career-form').length > 0 ? showJobDetail() : '');
// ANModal on hooks
swup.hooks.on('page:view', () => ANModal());
// credentialForm on hooks
swup.hooks.on('page:view', () => credentialForm());
// Run ANForm on hooks
swup.hooks.on('page:view', () => $('form').length > 0 ? ANForm() : '');

var bgColor = window.getComputedStyle(document.documentElement).getPropertyValue('--' + prefix + 'primary') ||  document.querySelector("meta[name=theme-color]").getAttribute("content") || '#ED7D31';
window.console.log('%cSuperfox Saga', 'background: ' + bgColor + '; color: #ffffff; font-size: 10px; padding: 4px 8px; border-radius: 4px;', 'v1.0.0 by Atas Nalar');