<script lang="ts">
import ResearchGroupLogo from "./ResearchGroupLogo.svelte";



</script>

<div class="container">
    <div class="logos">
        <img src="/tuw/informatics-logo.svg" alt="" class="logos__informatics">
        <div class="logos__research-group">
            <ResearchGroupLogo></ResearchGroupLogo>
        </div>
    </div>
    <div class="details">
        <div class="details__thesis">
            <h1 class="thesis-title">
                Your Thesis Title Comes Here And It May Be 
                Double-Spaced If Necessary
            </h1>
            <h2 class="author">[Fill in your full name]</h2>
            <h2 class="program-title">[Fill in official name of Master's program]</h2>
        </div>
        <div class="details__university">
            <p class="info__title">TU Wien Informatics</p>
            <p class="info__line">[Fill in official name of institute]</p>
            <p class="info__line">[Fill in official name of research unit]</p>
            <p class="info__line">Supervisor: [Fill in name, degrees and titles]</p>
            <p class="info__line">Contact: [Fill in your email address, optional]</p>
        </div>
    </div>
<!-- <div class="test">hello</div> -->
</div>

<style lang="scss">
    .container {
        height: 200mm;
        box-sizing: border-box;
        background-color: var(--c-tuw-header-background);
        padding: 26mm 26mm 10mm 26mm;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .logos {
        display: flex;
        justify-content: space-between;

        &__informatics {
            max-height: 39mm;
        }

        &__research-group {
            height: 60mm;
            width: 200mm;
            display: flex;
            flex-direction: row;
            justify-content: end;
        }
    }

    .info {
        &__title {
            @include font-copy-bold;
            margin-bottom: 2mm;
        }
        
        &__line {
            margin: 0;
            @include font-copy;
        }
    }

    .details {
        display: grid;
        grid-template-columns: 2fr 1fr;
        flex-grow: 1;

        &__thesis {
            margin-inline-start: 50mm;
            align-self: end;
            justify-self: start;
        }

        &__university {
            text-align: right;
            justify-self: end;
            align-self: end;
        }
    }

    .thesis-title {
        @include font-thesis-title;
        margin-bottom: 10mm;
    }

    .program-title, .author {
        @include font-thesis-author;
        margin: 1mm 0;
    }
</style>