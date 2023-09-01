<script>
  import {pop, push} from 'svelte-spa-router'
  const goHome = () => {
    pop();
  }
</script>

<main>
  <div class="title">
    me page
  </div>
  <button on:click={()=>{push('/')}}>Go Home</button>
  <button on:click="{goHome}">回到首页</button>
</main>