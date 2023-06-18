<script lang='ts'>
	import Toggle from './../toggle.svelte';
    import * as config from '$lib/config'
</script>

<nav>
    <a href="/" class='title'>
        <button data-text="Awesome" class="button">
            <span class="actual-text">&nbsp;theContainer&nbsp;</span>
            <span class="hover-text" aria-hidden="true">&nbsp;theContainer&nbsp;</span>
        </button>
</a>
 
<ul class='links'>
    <li>
        <a href="/about">About</a>
    </li>
    <li>
        <a href="/contact">Contact</a>
    </li>
    <li>
        <a href="/rss.xml" target='_blank'>RSS</a>
    </li>
</ul>


<Toggle />
</nav>

<style>
      /* Style for the list items */
  li {
    font-weight: bold;
  }

  /* Text color transition animation */
  @keyframes colorTransition {
    0% { color: red; }
    25% { color: blue; }
    50% { color: green; }
    75% { color: orange; }
    100% { color: red; }
  }

  /* Apply the animation to the list item text on hover */
  li:hover {
    animation: colorTransition 2s infinite;
  }


    nav {
        padding-block: var(--size-7 );
    }

    .links {
        margin-block: var(--size-7 );
    }

    a {
        color: inherit;
        text-decoration: none;
    }
    /* === removing default button style ===*/
.button {
  margin: 0;
  height: auto;
  background: transparent;
  padding: 0;
  border: none;
}

/* button styling */
.button {
  --border-right: 6px;
  --text-stroke-color: rgba(170, 155, 200, 0.6);
  --animation-color: #22acc1;
  --fs-size: 2em;
  letter-spacing: 3px;
  text-decoration: none;
  font-size: var(--fs-size);
  font-family: "Arial";
  position: relative;
  color: transparent;
  -webkit-text-stroke: 1px var(--text-stroke-color);
}
/* this is the text, when you hover on button */
.hover-text {
  position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: var(--animation-color);
  width: 0%;
  inset: 0;
  border-right: var(--border-right) solid var(--animation-color);
  overflow: hidden;
  transition: 0.5s;
  -webkit-text-stroke: 1px var(--animation-color);
}
/* hover */
.button:hover .hover-text {
  width: 100%;
  filter: drop-shadow(0 0 23px var(--animation-color))
}


    @media (min-width: 768px) {
        nav {
            display: flex;
            justify-content: space-between
        }

        .links {
            display: flex;
            gap: var(--size-7 );
            margin-block: 0;
        }
    }

</style>
