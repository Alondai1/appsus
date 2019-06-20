export default {
    template: `
    <section class="mail-bar">
        <div><i class="fas fa-plus"></i> compose</div>
        <ul>
            <li @click="selectedFolder('inbox')"><i class="fas fa-inbox"></i> Inbox</li>
            <li @click="selectedFolder('starred')"><i class="fas fa-star"></i> Starred</li>
            <li @click="selectedFolder('sent')"><i class="fas fa-share-square"></i> Sent</li>
            <li @click="selectedFolder('trash')"><i class="fas fa-share-square"></i> Trash</li>
        </ul>
    </section>
    `,
    methods: {
        selectedFolder(data) {
            this.$emit('setFolder', data)
        }
    },
}