# STORMTR00P3R.github.io

Developer Site for Elias built as static site using Jekyll.

## Wed Dec 18

Next steps:

- Create a folder called `_includes`
- Create a file called `profile.html` inside this folder
- Inside `_includes/profile.html`, add the following code:

```html
<div class="profile">
    <hgroup>
        <h1 class="profile-name">{{ site.title }}</h1>
        <img class="profile-pic" src="/assets/images/brand/logo.png" alt="My Website Logo">
    </hgroup>

    <section class="profile-bio">
        <p>{{ site.description }}</p>
    </section>

    <section class="profile-menu">
        <a href="/feed.xml">
            <img src="/assets/images/icons/rss.svg" alt="RSS Feed">
            <span>RSS Feed</span>
        </a>
    </section>
</div>
```

## Tue Dec 17

- Find project path on VS Code
- Update README
- Define application specification
- Added the following files
    - .config.yml
    - Software License
    - .gitignore

## Wed 12/11

- Archive old Github Pages site
- Create Github repository
- Review Pull Requests

After setting up the repo, we will collaborate
to develop a Jekyll-based static site for a
portfolio site.
