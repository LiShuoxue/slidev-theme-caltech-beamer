<template>
	<footer class="absolute bottom-0 left-0 right-0 flex text-center text-white">
		<div class="flex-1 p-1" style="background:#7A303F">
			{{ $slidev.configs.author || "Unknown author" }}
		</div>
		<div class="flex-1 p-1" style="background:#003B4C">
			{{ $slidev.configs.title || "Unknown title" }}
		</div>
		<div class="flex-1 p-1" style="background:#005851">
			<div class="float-right">
				{{ $slidev.nav.currentPage }} /
				<SlidesTotal />
			</div>
			{{ $slidev.configs.date || new Date().toLocaleDateString() }}
		</div>
	</footer>
</template>

<script setup lang="ts">
import SlidesTotal from "@slidev/client/builtin/SlidesTotal.vue";
</script>