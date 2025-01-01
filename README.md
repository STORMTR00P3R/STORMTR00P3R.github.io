# STORMTR00P3R.github.io

Developer Site for Elias built as static site using Jekyll.

## Tue Dec 31

- Added modern normalize

Next steps:

1. Create a new file `base.css`
2. Add the following code:

```css
/* User Profile */

.profile {
  background-color: black;
  color: white;
  padding-block-end: 1rem;
  padding-inline: 1rem;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.85);
}

.profile hgroup {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.profile-name {
  font-size: var(--fs-1);
  font-family: 'Times New Roman', Times, serif;
}

.profile-pic {
  height: 60px;
  width: 60px;
  border-radius: 100%;
  border: 1px solid white;
  margin-top: 1rem;
}

.profile-bio {
  color: lightgray;
  max-width: 20ch;
}

.profile-menu {
  display: flex;
  margin-block: 1.25rem;
  gap: 1rem;
}

.profile-menu a {
  color: black;
  text-decoration: none;
  background-color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  gap: 0.25rem;
  font-weight: bold;
  font-size: var(--fs--1);
}

.profile-menu img {
  height: 1rem;
}

.profile-menu a:visited {
  /* color: white; */
}
````

## Wed Dec 18

- Added profile partial template
- Updated repository
- Added assets directory

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
