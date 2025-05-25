# 0x04-TypeScript

This project contains a comprehensive series of TypeScript exercises designed to teach fundamental and advanced TypeScript concepts. The project consists of 12 tasks (0-11) that progressively build your understanding of TypeScript.

## Project Structure

```
0x04-TypeScript/
├── README.md
├── task_0/
│   ├── js/main.ts
│   ├── package.json
│   ├── .eslintrc.js
│   ├── tsconfig.json
│   └── webpack.config.js
├── task_1/
│   ├── js/main.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
├── task_2/
│   ├── js/main.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
├── task_3/
│   ├── js/
│   │   ├── main.ts
│   │   ├── interface.ts
│   │   ├── crud.d.ts
│   │   └── crud.js
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
├── task_4/
│   ├── js/
│   │   ├── main.ts
│   │   └── subjects/
│   │       ├── Teacher.ts
│   │       ├── Subject.ts
│   │       ├── Cpp.ts
│   │       ├── Java.ts
│   │       └── React.ts
│   ├── package.json
│   └── tsconfig.json
└── task_5/
    ├── js/main.ts
    ├── package.json
    ├── tsconfig.json
    └── webpack.config.js
```

## Requirements

### General

- **Allowed editors**: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- All files will be transpiled on Ubuntu 18.04
- TypeScript scripts will be checked with jest (version 24.9.\*)
- Your code should use the `.ts` extension when possible
- The TypeScript compiler should not show any warning or error when compiling your code

### Technical Requirements

- Node.js (v12 or higher recommended)
- npm (comes with Node.js)
- TypeScript compiler
- Webpack for bundling
- Jest for testing

## Installation

For each task directory, run the following commands:

```bash
# Navigate to the task directory
cd task_X  # Replace X with the task number

# Install dependencies
npm install

# Build the project
npm run build

# Run development server (for applicable tasks)
npm run start-dev
```

## Tasks Overview

### Task 0: Creating an interface for a student

- **Objective**: Learn basic interface creation and DOM manipulation
- **Files**: `task_0/js/main.ts`
- **Concepts**: Interfaces, arrays, DOM manipulation with TypeScript

### Task 1: Let's build a Teacher interface

- **Objective**: Create interfaces with optional and readonly properties
- **Files**: `task_1/js/main.ts`
- **Concepts**: Readonly properties, optional properties, index signatures

### Task 2: Extending the Teacher class

- **Objective**: Learn interface inheritance
- **Files**: `task_1/js/main.ts` (continuation)
- **Concepts**: Interface extension with `extends`

### Task 3: Printing teachers

- **Objective**: Create functions with interfaces
- **Files**: `task_1/js/main.ts` (continuation)
- **Concepts**: Function interfaces, function implementation

### Task 4: Writing a class

- **Objective**: Learn class creation and interfaces for classes
- **Files**: `task_1/js/main.ts` (continuation)
- **Concepts**: Classes, constructors, methods, class interfaces

### Task 5: Advanced types Part 1

- **Objective**: Work with multiple interfaces and factory functions
- **Files**: `task_2/js/main.ts`
- **Concepts**: Multiple interfaces, class implementation, factory functions

### Task 6: Creating functions specific to employees

- **Objective**: Learn type predicates and conditional logic
- **Files**: `task_2/js/main.ts` (continuation)
- **Concepts**: Type predicates, type guards, conditional function execution

### Task 7: String literal types

- **Objective**: Understand string literal types and union types
- **Files**: `task_2/js/main.ts` (continuation)
- **Concepts**: String literal types, union types, type safety

### Task 8: Ambient Namespaces

- **Objective**: Learn to work with external JavaScript libraries
- **Files**: `task_3/js/main.ts`, `task_3/js/interface.ts`, `task_3/js/crud.d.ts`
- **Concepts**: Ambient declarations, type definitions, external libraries

### Task 9: Namespace & Declaration merging

- **Objective**: Understand namespaces and declaration merging
- **Files**: `task_4/js/subjects/*.ts`
- **Concepts**: Namespaces, declaration merging, module organization

### Task 10: Update task_4/js/main.ts

- **Objective**: Work with namespace exports and imports
- **Files**: `task_4/js/main.ts`
- **Concepts**: Namespace usage, triple-slash directives, exports

### Task 11: Brand convention & Nominal typing

- **Objective**: Learn nominal typing and branded types
- **Files**: `task_5/js/main.ts`
- **Concepts**: Branded types, nominal typing, type safety

## Key TypeScript Concepts Covered

1. **Basic Types**: string, number, boolean, arrays
2. **Interfaces**: Object shape definition, optional properties, readonly properties
3. **Classes**: Constructor functions, methods, inheritance
4. **Functions**: Parameter types, return types, function interfaces
5. **Advanced Types**: Union types, intersection types, type guards
6. **Namespaces**: Code organization, declaration merging
7. **Modules**: Import/export, ambient declarations
8. **Generic Types**: Type parameters, constraints
9. **Utility Types**: Built-in TypeScript utility types
10. **Branded Types**: Nominal typing patterns
