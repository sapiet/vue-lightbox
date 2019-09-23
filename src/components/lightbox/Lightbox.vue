<template src="./Lightbox.html"/>
<style lang="scss" src="./Lightbox.scss"></style>

<script>
import './LightboxDirective'
import LightboxImage from './LightboxImage';
import store from './LightboxStore';

export default {
    components: {
        LightboxImage
    },
    data() {
        return {
            state: store.state,
            direction: 'next'
        }
    },
    computed: {
        url() {
            return this.state.index !== null ? this.state.images[this.state.group][this.state.index] : null;
        },

        transition() {
            return `lightbox-${this.direction}`;
        }
    },
    methods: {
        close() {
            store.close();
        },

        previous() {
            this.direction = 'previous';
            store.previous();
        },

        next() {
            this.direction = 'next';
            store.next();
        }
    }
}
</script>
