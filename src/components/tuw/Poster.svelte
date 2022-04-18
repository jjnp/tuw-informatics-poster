<script lang="ts">
import PosterHeader from "./PosterHeader.svelte";


</script>


<div class="a0">
    <PosterHeader></PosterHeader>
    <div class="content">
        <slot></slot>
    </div>
</div>

<style lang="scss">
    @import '../../styles/global.scss';
    .a0 {
        width: 841mm;
        height: 1189mm;
        position: absolute;
        overflow: hidden;
    }

    .content {
        height: 100%;
        width: 100%;
        padding: 12.7mm;
    }
</style>
