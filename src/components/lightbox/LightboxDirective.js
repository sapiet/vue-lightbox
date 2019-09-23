import Vue from 'vue'
import store from './LightboxStore'

Vue.directive('lightbox', {
    bind(element, binding) {
        let group = binding.value === undefined ? 'default' : binding.value;
        let href = element.getAttribute('href');
        store.addImage(href, group);

        element.addEventListener('click', function(event) {
            event.preventDefault();
            store.open(href, group);
        })
    },

    unbind(element) {
        let group = binding.value === undefined ? 'default' : binding.value;
        store.remove(element.getAttribute('href'), group);
    }
});
