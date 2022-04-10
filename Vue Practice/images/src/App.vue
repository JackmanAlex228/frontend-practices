<template>
  <div>
    <AppHeader></AppHeader>
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