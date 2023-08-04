// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const contentContainers = document.querySelectorAll('.content');
  const navLinks = document.querySelectorAll('.nav-link');

  // Show the content for "Home" by default
  const defaultContent = document.getElementById('home');
  defaultContent.style.display = 'block';

  // Function to update content ID
  function updateContentId(newId) {
    contentContainers.forEach(container => {
      container.style.display = 'none';
    });

    const targetContainer = document.getElementById(newId);
    if (targetContainer) {
      targetContainer.style.display = 'block';
      targetContainer.id = newId;
    }
  }

  // Event listener for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = link.getAttribute('href').substr(1);
      updateContentId(targetId);
	  
// Scroll to the content if it's not 'Home'
		if (targetId !== 'home') {
			const targetElement = document.getElementById(targetId);
			const headerHeight = document.querySelector('nav').offsetHeight;
			const scrollOptions = {
				top: targetElement.getBoundingClientRect().top + window.scrollY - headerHeight,
				behavior: 'smooth'
			};
			window.scrollTo(scrollOptions);
		}
    });
  });
});

$(document).ready(function () {
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Show the initial content (Home) on page load
    $('.content#home').addClass('active');

    // Handle click events on navigation links
    $('nav a.nav-link').on('click', function () {
        // Hide all content and remove active class from main tabs
        $('.content').removeClass('active');
        $('nav a.nav-link').removeClass('active');

        // Show the content associated with the clicked link
        var targetId = $(this).attr('href');
        $(targetId).addClass('active');
        $(this).addClass('active');

        // Check if the clicked link has subtabs
        if ($(this).hasClass('subtabs-toggle')) {
            // Show the subtabs associated with the clicked link
            $($(this).attr('href')).addClass('show');
        } else {
            // Hide the subtabs if another main tab is clicked
            $('#aboutSubtabs').removeClass('show');
        }
    });

    // Handle click events on subtabs links in the "About" section
    $('#aboutSubtabs a.nav-link').on('click', function () {
        // Hide all content and remove active class from subtabs links
        $('.content').removeClass('active');
        $('#aboutSubtabs a.nav-link').removeClass('active');

        // Show the content associated with the clicked subtabs link
        var targetId = $(this).attr('href');
        $(targetId).addClass('active');
        $(this).addClass('active');
    });
});
