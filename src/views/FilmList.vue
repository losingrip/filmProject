<template>
  <div class="FilmList">
    <HeaderMenu></HeaderMenu>
    <Findbox></Findbox>
    <SelectCard></SelectCard>
    <FilmLists></FilmLists>
  </div>
</template>

<script>
  import HeaderMenu from '../components/HeaderMenu';
  import Findbox from '../components/Findbox';
  import SelectCard from '../components/SelectCard';
  import FilmLists from '../components/FilmLists';

  export default {
    name: 'FilmList',
    components: {
      HeaderMenu,
      Findbox,
      SelectCard,
      FilmLists,
    }
  };
</script>

<style scoped>
  .mian {
    height: 200px;
  }
</style>
