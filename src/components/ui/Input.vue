<template>
	<div class="input">
		<input
			:value="value"
			:class="classes"
			v-bind="options"
			v-on:input="$emit('input', $event.target.value)"
			v-on:blur="$emit('blur', $event.target.value)"
			v-on:change="$emit('change', $event.target.value)"
			v-on:keydown.enter="$emit('onenter', $event.target.value)"
		/>
		<div v-if="loading" class="spinner"></div>
	</div>
</template>

<script>
export default {
	name: "Input",
	props: {
		value: {
			type: String,
			required: true
		},
		placeholder: {
			type: String
		},
		type: {
			type: String,
			default: 'text'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
	},
	computed: {
		classes() {
			const classes = []
			if (this.disabled) classes.push('disabled')
			if (this.loading) classes.push('loading')
			return classes
		},
		options() {
			return {
				type: this.type,
				placeholder: this.placeholder,
				disabled: this.disabled
			}
		}
	}
}
</script>

<style lang="scss">
	.input {
		position: relative;
		input {
			color: $secondaryColor;
			font-size: 14px;
			font-weight: 400;
			padding: 16px 16px;
			border-radius: 8px;
			border: 1.5px solid var(--all-colors-gray-gray-200, #E9ECEF);
			background-color: $whiteColor;
			&.disabled {
				user-select: none;
				pointer-events: none;
				opacity: 0.8;
				cursor: default;
			}
			&.loading {
				padding-right: 40px;
			}
		}
		
	}
	.spinner {
		position: absolute;
		top: 50%;
		right: 10px;
		bottom: 0;
		transform: translateY(-50%);
		width: 20px;
		height: 20px;
		border: 3px solid $grayColor;
		border-bottom-color: transparent;
		border-radius: 50%;
		display: inline-block;
		box-sizing: border-box;
		animation: rotate360top 1s linear infinite;
	}
</style>
