# Component Update Lifecycle (for props Changes)

- **Task 1**: Understand life cycle update
- **Task 2**: Adjust Component **Person, Persons** from functional component to class component
- **Task 3**: Create function getDerivedStateFromProps in **Persons**
- **Task 4**: Create function shouldComponentUpdate in **Persons**
- **Task 5**: Create function getSnapshotBeforeUpdate in **Persons**
- **Task 6**: Create function componentDidUpdate in **Persons**

## Notes

- shouldComponentUpdate(return **true** pr **false**): will get next props, so the upcoming props which will have an effect right after this update which is about to take place and the upcoming state as arguments
  - Return **true** if React should continue update
  - Return **false** if React shouldn't continue update

# Component Update Lifecycle (for state Changes)

- **Task 1**: Create function shouldComponentUpdate in **App**
- **Task 2**: Create function componentDidUpdate in **App**