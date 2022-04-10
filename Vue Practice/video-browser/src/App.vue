<template>
    <div>
        <SearchBar @termChange="onTermChange"></SearchBar>
    </div>
</template>

<script>
import SearchBar from './components/SearchBar';

export default {
    name: 'App', // good for debugging
    components: {
        SearchBar
    },
    meethods: {
        onTermChange(searchTerm) {
            console.log(searchTerm);
        }
    }
};
</script>