export default {
    template: `
    <section class="mail-bar">
        <div class="mail-compose" @click="selectedFolder('compose')"><i class="fas fa-plus"></i> compose</div>
        <ul>
            <li @click="selectedFolder('inbox')"><i class="fas fa-inbox"></i> Inbox</li>
            <li @click="selectedFolder('starred')"><i class="fas fa-star"></i> Starred</li>
            <li @click="selectedFolder('sent')"><i class="fas fa-share-square"></i> Sent</li>
            <li @click="selectedFolder('trash')"><i class="fas fa-trash"></i> Trash</li>
        </ul>
        <ui-progress-linear color="primary" type="determinate" :progress="75"></ui-progress-linear>
    </section>
    `,
    methods: {
        selectedFolder(data) {
            this.$emit('setFolder', data)
        }
    },
}