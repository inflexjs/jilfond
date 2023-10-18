<template>
	<div
		v-if="name && email"
		:class="['user-card', active ? 'active' : '']"
		v-on:click="$emit('click', id)"
	>
		<div class="user-card__image">
			<img
				:src="image"
				alt="avatar"
			>
		</div>
		<div class="user-card__information">
			<h3 class="user-card__title">{{ name }}</h3>
			<p class="user-card__text">{{ email }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "UserCard",
	props: {
		id: {
			type: Number,
			required: true
		},
		image: {
			type: String,
			default: require('@/assets/images/default-image.png')
		},
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		active: {
			type: Boolean
		}
	}
}
</script>

<style lang="scss">
	.user-card {
		border-radius: 10px;
		background: #FFF;
		box-shadow: 0 0 10px 0 $shadowDarkColor;
		display: flex;
		cursor: pointer;
		overflow: hidden;
		&.active {
			box-shadow: 0 0 0 2px $shadowDarkColor;
			& .user-card__information {
				background-color: $shadowDarkColor;
			}
		}
		&__image {
			border-right: 1px solid $shadowDarkColor;
			min-width: 70px;
			width: 70px;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		&__information {
			display: flex;
			flex-direction: column;
			justify-content: center;
			row-gap: 5px;
			flex-grow: 1;
			padding: 15px;
		}
		&__title {
			color: $primaryColor;
			font-size: 14px;
			font-weight: 600;
		}
		&__text {
			color: $secondaryColor;
			font-size: 14px;
			font-weight: 400;
		}
		&__title,
		&__text {
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			max-width: 140px;
		}
	}
</style>
