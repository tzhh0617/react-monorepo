import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}"
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'Inter',
                    ...fontFamily.sans
                ]
  		},
  		colors: {
  			background: 'hsl(0 0% 100%)',
  			foreground: 'hsl(222.2 47.4% 11.2%)',
  			primary: {
  				DEFAULT: 'hsl(221.2 83.2% 53.3%)',
  				foreground: 'hsl(210 40% 98%)'
  			},
  			secondary: {
  				DEFAULT: 'hsl(210 40% 96.1%)',
  				foreground: 'hsl(222.2 47.4% 11.2%)'
  			},
  			accent: {
  				DEFAULT: 'hsl(210 40% 96.1%)',
  				foreground: 'hsl(222.2 47.4% 11.2%)'
  			},
  			card: {
  				DEFAULT: 'hsl(0 0% 100%)',
  				foreground: 'hsl(222.2 47.4% 11.2%)'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			xl: '1rem'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
