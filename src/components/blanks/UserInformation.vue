<template>
	<div class="employee-information">
		<template
			v-if="isHaveData"
		>
			<div class="employee-information__image">
				<img
					:src="image"
					alt="1"
				>
			</div>
			<div class="employee-information__wrapper">
				<div class="employee-information__contact">
					<h3 class="employee-information__title">{{ name }}</h3>
					<p class="employee-information__text">
						<strong>email:</strong>{{ email }}
					</p>
					<p class="employee-information__text">
						<strong>phone:</strong>{{ phone }}
					</p>
				</div>
				<div class="employee-information__about">
					<h3 class="employee-information__title">О себе:</h3>
					<p class="employee-information__description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
		</template>
		<p
			v-else
			class="employee-information__text employee-information__text--center"
		>Выберите сотрудника, чтобы посмотреть его профиль</p>
	</div>
</template>

<script>
export default {
	name: "EmployeeInformation",
	props: {
		id: {
			type: Number || undefined,
		},
		image: {
			type: String,
			default: require('@/assets/images/default-image.png')
		},
		email: {
			type: String || undefined
		},
		name: {
			type: String || undefined,
		},
		phone: {
			type: String || undefined
		},
		username: {
			type: String || undefined
		}
	},
	computed: {
		isHaveData() {
			return this.id && this.email && this.name && this.phone && this.username
		}
	}
}
</script>

<style lang="scss">
	.employee-information {
		position: relative;
		display: flex;
		column-gap: 60px;
		&__title {
			color: $blackColor;
			font-size: 16px;
			font-weight: 600;
		}
		&__text {
			display: flex;
			column-gap: 10px;
			color: #76787D;
			strong {
				color: $primaryColor;
				font-weight: 600;
			}
			&--center {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
			}
		}
		&__image {
			min-width: 424px;
			height: 286px;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		&__wrapper {
			display: flex;
			flex-direction: column;
			row-gap: 20px;
		}
		&__contact {
			display: flex;
			flex-direction: column;
			row-gap: 10px;
		}
		&__about {
			display: flex;
			flex-direction: column;
			row-gap: 25px;
		}
	}
</style>
