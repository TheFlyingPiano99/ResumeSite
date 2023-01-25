document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {alignment: 'left', constrainWidth: false});
  });

  // Or with jQuery

  $('.dropdown-trigger').dropdown();