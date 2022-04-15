<template>
  <div>
    <AppHeader></AppHeader>
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

// This is where the main app lives
import AppHeader from './components/AppHeader';

export default {
    name: 'App',
    components: {
        AppHeader
    }
};
</script>
