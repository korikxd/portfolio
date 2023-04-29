const FIRST_PROJECT_TAGS = [
   { key: '1', tag: 'testing', color: 'blue' },
   { key: '1', tag: 'testing', color: 'green' },
   { key: '1', tag: 'testing', color: 'yellow' },
   { key: '1', tag: 'testing', color: 'red' },
   { key: '1', tag: 'testing', color: 'blue' },
]

const SECOND_PROJECT_TAGS = [
   { key: '1', tag: 'testing', color: 'blue' },
   { key: '1', tag: 'testing', color: 'green' },
   { key: '1', tag: 'testing', color: 'green' },
   { key: '1', tag: 'testing', color: 'orange' },
   { key: '1', tag: 'testing', color: 'green' },
]

const THIRD_PROJECT_TAGS = [
   { key: '1', tag: 'testing', color: 'blue' },
   { key: '1', tag: 'testing', color: 'blue' },
   { key: '1', tag: 'testing', color: 'blue' },
   { key: '1', tag: 'testing', color: 'blue' },
   { key: '1', tag: 'testing', color: 'blue' },
]

export const PROJECTS = [
   {
      key: '1', title: 'First Project',
      description: 'Some description above the project', tags: FIRST_PROJECT_TAGS,
      website: '', sourceCode: ''
   },
   {
      key: '2', title: 'Second Project',
      description: 'Some description above the project', tags: SECOND_PROJECT_TAGS,
      website: '', sourceCode: ''
   },
   {
      key: '3', title: 'Third Project',
      description: 'Some description above the project', tags: THIRD_PROJECT_TAGS,
      website: '', sourceCode: ''
   },
]
