class LightboxStore {
    constructor() {
        this.state = {
            images: {},
            index: null,
            group: null
        }
    }

    addImage(url, group) {
        if (this.state.images[group] === undefined) {
            this.state.images[group] = [];
        }

        return this.state.images[group].push(url) - 1;
    }

    open(url, group) {
        this.state.group = group;
        this.state.index = this.state.images[group].indexOf(url);
    }

    close() {
        this.state.index = false;
    }

    previous() {
        this.state.index = this.state.index <= 0 ? this.state.images[this.state.group].length - 1 : this.state.index - 1;
    }

    next() {
        this.state.index = this.state.index >= this.state.images[this.state.group].length - 1 ? 0 : this.state.index + 1;
    }

    remove(url, group) {
        this.state.images[group].splice(this.state.images[group].indexOf(url), 1);
    }
}

export default new LightboxStore()
