<script>
  import Child from './Child.svelte';
  export let name;
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    color: #fff;
  }

  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    -postat-extend-ph: fancyBg;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <Child />
</main>
