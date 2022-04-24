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
        width: dpiAdjust(841mm);
        height: dpiAdjust(1189mm);
        position: absolute;
        overflow: hidden;

        display: flex;
        flex-direction: column;
    }

    .content {
        box-sizing: border-box;
        flex-grow: 1;
        margin: dpiAdjust(12.7mm);
        overflow: hidden;
    }
</style>
