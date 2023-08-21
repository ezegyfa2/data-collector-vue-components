<script>
    import Form from '../../../../helper-vue-components/src/Form/BootstrapForm/Component.vue'

    export default {
        mixins: [
            Form,
        ],
        data() {
            return {
                formItemTypePrefix: 'data-collector-admin'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
