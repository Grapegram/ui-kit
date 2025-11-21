<script setup lang="ts">
import { ref } from 'vue'
import {
  Button,
  Input,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Badge,
  Typography,
  Separator,
  Skeleton,
  Field,
} from '@grapegram/ui-kit'
import { Mail, Search, Bell } from 'lucide-vue-next'

const inputValue = ref('')
const emailValue = ref('')
</script>

<template>
  <div class="bg-background min-h-screen p-8">
    <div class="mx-auto max-w-4xl space-y-12">
      <!-- Header -->
      <header class="text-center">
        <Typography variant="h1" weight="bold" class="mb-2"> Grapegram UI Kit Example </Typography>
        <Typography variant="body" class="text-muted-foreground">
          Demonstration of all available components from @grapegram/ui-kit
        </Typography>
      </header>

      <!-- Typography Section -->
      <section class="space-y-4">
        <Typography variant="h2" weight="bold">Typography</Typography>
        <Separator />
        <div class="space-y-2">
          <Typography variant="h1" weight="bold">Heading 1 (h1)</Typography>
          <Typography variant="h2" weight="bold">Heading 2 (h2)</Typography>
          <Typography variant="h3" weight="bold">Heading 3 (h3)</Typography>
          <Typography variant="h4" weight="bold">Heading 4 (h4)</Typography>
          <Typography variant="h5" weight="bold">Heading 5 (h5)</Typography>
          <Typography variant="h6" weight="bold">Heading 6 (h6)</Typography>
          <Typography variant="body" weight="regular">
            This is a body paragraph with regular body text. It uses the Roboto font family and has
            proper line height for readability.
          </Typography>
          <Typography variant="body-sm" weight="regular">
            This is body-sm text, slightly smaller than regular body text.
          </Typography>
          <Typography variant="caption" weight="regular">
            This is caption text, the smallest variant available.
          </Typography>
          <Typography variant="body" weight="light" class="text-muted-foreground">
            This is muted text with reduced opacity using light weight.
          </Typography>
        </div>
      </section>

      <!-- Buttons Section -->
      <section class="space-y-4">
        <Typography variant="h2" weight="bold">Buttons</Typography>
        <Separator />
        <div class="flex flex-wrap gap-4">
          <Button variant="default">Default Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="destructive">Destructive Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
        </div>
        <div class="flex flex-wrap gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <Bell :size="20" />
          </Button>
        </div>
        <div class="flex flex-wrap gap-4">
          <Button disabled>Disabled Button</Button>
          <Button variant="secondary" disabled>Disabled Secondary</Button>
        </div>
      </section>

      <!-- Input Section -->
      <section class="space-y-4">
        <Typography variant="h2" weight="bold">Inputs</Typography>
        <Separator />
        <div class="space-y-4">
          <div class="max-w-md">
            <Input v-model="inputValue" placeholder="Enter text..." />
          </div>
          <div class="max-w-md">
            <Input v-model="emailValue" type="email" placeholder="Enter email..." />
          </div>
          <div class="max-w-md">
            <Input disabled placeholder="Disabled input" />
          </div>
          <div class="flex max-w-md gap-2">
            <Input placeholder="Search..." class="flex-1" />
            <Button size="icon">
              <Search :size="20" />
            </Button>
          </div>
        </div>
      </section>

      <!-- Field Section -->
      <section class="space-y-4">
        <Typography variant="h2" weight="bold">Fields (Input with Label)</Typography>
        <Separator />
        <div class="max-w-md space-y-4">
          <Field label="Username" placeholder="Enter your username" required />
          <Field
            label="Email"
            type="email"
            placeholder="your.email@example.com"
            description="We'll never share your email."
          />
          <Field
            label="Disabled Field"
            placeholder="Cannot edit"
            disabled
            description="This field is disabled"
          />
          <Field
            label="Field with Error"
            placeholder="Enter something"
            error="This field is required"
          />
        </div>
      </section>

      <!-- Avatar Section -->
      <section class="space-y-4">
        <Typography variant="h2" weight="bold">Avatars</Typography>
        <Separator />
        <div class="flex items-center gap-4">
          <Avatar size="sm">
            <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar size="base">
            <AvatarImage src="https://github.com/vercel.png" alt="Vercel" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
          <Avatar size="base">
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
      </section>

      <!-- Badge Section -->
      <section class="space-y-4">
        <Typography variant="h2" weight="bold">Badges</Typography>
        <Separator />
        <div class="flex flex-wrap gap-3">
          <Badge variant="base">Base Badge</Badge>
          <Badge variant="active">Active Badge</Badge>
        </div>
      </section>

      <!-- Skeleton Section -->
      <section class="space-y-4">
        <Typography variant="h2" weight="bold">Skeleton Loaders</Typography>
        <Separator />
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <Skeleton class="h-12 w-12 rounded-full" />
            <div class="max-w-md flex-1 space-y-2">
              <Skeleton class="h-4 w-full" />
              <Skeleton class="h-4 w-4/5" />
            </div>
          </div>
          <Skeleton class="h-32 w-full max-w-md rounded-lg" />
        </div>
      </section>

      <!-- Combined Example -->
      <section class="space-y-4">
        <Typography variant="h2" weight="bold">Combined Example</Typography>
        <Separator />
        <div class="border-border bg-card max-w-md rounded-lg border p-6">
          <div class="mb-4 flex items-center gap-4">
            <Avatar size="base">
              <AvatarImage src="https://github.com/vercel.png" alt="Vercel" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div class="flex-1">
              <Typography variant="h5" weight="bold" class="mb-1">John Doe</Typography>
              <Typography variant="body-sm" class="text-muted-foreground">
                john.doe@example.com
              </Typography>
            </div>
            <Badge variant="active">Pro</Badge>
          </div>
          <Separator class="my-4" />
          <div class="space-y-3">
            <Field label="Message" placeholder="Type your message..." />
            <div class="flex justify-end gap-2">
              <Button variant="ghost">Cancel</Button>
              <Button variant="default">
                <Mail :size="16" class="mr-2" />
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="pt-8 text-center">
        <Separator class="mb-4" />
        <Typography variant="body-sm" class="text-muted-foreground">
          Built with @grapegram/ui-kit • Vue 3 + Vite + Tailwind CSS v4
        </Typography>
      </footer>
    </div>
  </div>
</template>

<style scoped>
/* Additional component-specific styles if needed */
</style>
