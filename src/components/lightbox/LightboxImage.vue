<template src="./LightboxImage.html"/>

<script>
export default {
    props: {
        url: String
    },
    data() {
        return {
            loading: true,
            src: null,
            style: {}
        }
    },
    methods: {
        resizeImage(image) {
            let width = image.width;
            let height = image.height;

            if (width > window.innerWidth || height > window.innerHeight) {
                window.console.log('C\'est trop grand !');
                let ratio = width / height;
                let windowRatio = window.innerWidth / window.innerHeight;

                if (ratio > windowRatio) {
                    width = window.innerWidth;
                    height = width / ratio;
                } else {
                    height = window.innerHeight;
                    width = height * ratio;
                }
            }

            this.style = {
                width: width + 'px',
                height: height + 'px',
                top: ((window.innerHeight - height) * 0.5) + 'px',
                left: ((window.innerWidth - width) * 0.5) + 'px',
            }
        }
    },
    mounted() {
        let image = new window.Image();

        image.onload = () => {
            this.loading = false;
            this.src = this.url;
            this.resizeImage(image);
        };

        image.src = this.url;

        this.resizeEvent = () => this.resizeImage(image);

        window.addEventListener('resize', this.resizeEvent);
    },
    destroyed() {
        window.removeEventListener('resize', this.resizeEvent);
    }
}
</script>
