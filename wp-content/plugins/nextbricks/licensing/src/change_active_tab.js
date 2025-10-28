/*Switch between tabs*/
document.addEventListener('DOMContentLoaded', function () {
    var navElements = document.querySelectorAll('.bc-sidebar__nav-item-wrapper');
    var tabElements = document.querySelectorAll('.bc-settings');

    navElements.forEach(function(navElement) {
        navElement.addEventListener('click', function () {
            var dataTab = navElement.getAttribute('data-tab');
            document.getElementById('bc_active_tab').value = dataTab;
            
            jQuery.ajax({
                url: data_tab.ajaxurl,
                type: 'POST',
                data: {
                    action: 'get_data_from_active_tab_script',  // Especifica la acción del lado del servidor
                    bc_active_tab: dataTab
                },
            });

            tabElements.forEach(function(tabElement) {
                if(tabElement.getAttribute('data-tab') == navElement.getAttribute('data-tab')){
                    tabElement.classList.add('bc-settings--active');
                }else{
                    tabElement.classList.remove('bc-settings--active');
                }
            });

            navElements.forEach(function(navElementAux) {
                navElementAux.classList.remove('bc-sidebar__nav-item-wrapper-active');
            });
            navElement.classList.add('bc-sidebar__nav-item-wrapper-active');
        });
    });
});