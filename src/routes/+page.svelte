<script lang='ts'> 
    import {formatDate} from '$lib/utils'
    import * as config from '$lib/config'

    export let data
</script>

<svelte:head>
    <title> {config.title} </title>
</svelte:head>

<section>
    <ul class="post">
        {#each data.posts as post}
            <li class='post'>
                <a href={post.slug} class="title"> {post.title} </a>
                <p class="date"> {formatDate(post.date)} </p>
                <p class="description"> {post.description} </p>
            </li>
        {/each}
    </ul>
</section>

<style>
    .post {
        display: grid;
        list-style: none;
        padding: 0;
    }

    .post:not(:last-child) {
        border-bottom: 1px var(--border);
        padding-bottom: var(--size-7);
    }

    .title {
        font-size: var(--font-size-fluid-3);
        text-transform: capitalize;
    }

    .title:hover {
        text-decoration: underline;
    }

    .date {
        font-size: 0.8rem;
        color: var(--text-2);
    }

    .description {
        margin-top: var(--size-3);
    }
</style>

                