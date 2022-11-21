<script context="module">
   // your script goes here
</script>

<script>
   import '../app.css'
   import Nav from '../components/nav.svelte'
</script>

<div
   data-info="container"
   class="container-main p-8 max-4-6xl mx-auto z-[500] relative min-h-screen max-w-[100vw] duration-200"
>
   <Nav />
   <slot />
</div>
