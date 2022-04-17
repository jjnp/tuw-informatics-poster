<script lang="ts">
import SubComponent from "./SubComponent.svelte";

export let name: string

</script>

<div class="card">
    <a href="https://google.com">Go to google</a>
    <input />
    <h1 class="card__title_r">Das ist der titel</h1>
    <h1 class="card__title">Author: {name}</h1>
    <p class="card__description">Und das ist die beschreibung!</p>
    <p class="card__italic">I am italic, ey?</p>
    <p class="card__italic_l">And I am italic light</p>
</div>

<SubComponent></SubComponent>


<style lang="scss">
    @import '../styles/global.scss';

    .card {
        width: 180mm;
        height: 200mm;
        background-color: lightblue;

        &__title {
            color: red;
            // font-family: 'arial';
            &_r {
                font-family: 'Roboto';
            }
        }

        &__italic {
            font-family: 'Roboto';
            font-style: italic;
            font-weight: 400;
            &_l {
                font-family: 'Roboto';
            font-style: italic;
                font-weight: 300;
            }

        }

        &__description {
            color: blue;
        }
    }
</style>