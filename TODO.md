# TODO: Project Details Slide-over Panel

## Plan:

1. [ ] Create ProjectDetails component (src/components/ProjectDetails.tsx)
   - Use Sheet component for slide-over panel
   - Display: screenshots carousel, features list, tech stack details, live demo link, GitHub link

2. [ ] Update PROJECTS data in Projects.tsx
   - Add detailed description, features array, liveDemoUrl, githubUrl, screenshots

3. [ ] Update ProjectCard in Projects.tsx
   - Make "View Project" clickable with proper cursor
   - Pass project to parent component on click

4. [ ] Update Projects component
   - Manage selected project state
   - Integrate ProjectDetails component with Sheet

## Implementation Order:

1. First, update the PROJECTS data with additional details
2. Create the ProjectDetails component
3. Update Projects.tsx to integrate everything
