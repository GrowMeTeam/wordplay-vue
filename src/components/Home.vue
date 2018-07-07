<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>

    <StackLayout>
      <Button class="btn btn-primary" @tap="$router.push('/counter')">Counter My</Button>
      <Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World</Button>

      <Button class="btn btn-primary" @tap="$router.push('/categories')">Categories</Button>
      <Button class="btn btn-primary" @tap="$router.push('/playground')">Playground</Button>
    </StackLayout>

  </Page>
</template>
