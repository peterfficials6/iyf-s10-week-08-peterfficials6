# CommunityHub - React + Vite Application

A modern React application built with Vite featuring a community platform with posts, user interactions, and responsive design.

## 🚀 Features

- **Post Management**: Create, read, update, and delete posts
- **User Interactions**: Like posts and engage with content
- **Component Architecture**: Well-organized component structure
- **Responsive Design**: Mobile-first approach with modern CSS
- **State Management**: React hooks for local state management

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.jsx          # Navigation and header
│   │   ├── Footer.jsx          # Footer component
│   │   └── Sidebar.jsx         # Sidebar content
│   ├── Post/
│   │   ├── PostCard.jsx        # Individual post display
│   │   ├── PostList.jsx        # List of all posts
│   │   ├── CreatePost.jsx      # Post creation form
│   │   └── Stats.jsx           # Post statistics
│   └── shared/
│       ├── Button.jsx          # Reusable button component
│       ├── Card.jsx            # Card container component
│       ├── ContactForm.jsx     # Contact form component
│       ├── Counter.jsx         # Counter demonstration
│       ├── TodoList.jsx        # Todo list component
│       ├── Toggle.jsx          # Toggle switch component
│       └── UserGreeting.jsx    # User greeting component
├── assets/
│   ├── hero.png               # Hero image
│   ├── react.svg              # React logo
│   └── vite.svg               # Vite logo
├── App.jsx                    # Main application component
├── App.css                    # Application styles
├── main.jsx                   # Application entry point
└── index.css                  # Global styles
```

## 🛠️ Technologies Used

- **React 19** - UI library with modern hooks
- **Vite** - Fast build tool and dev server
- **CSS3** - Modern styling with responsive design
- **ESLint** - Code linting and quality assurance

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/peterfficials6/iyf-s10-week-08-peterfficials6.git
```

2. Navigate to the project directory:
```bash
cd iyf-s10-week-08-peterfficials6
```

3. Install dependencies:
```bash
npm install
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏃‍♂️ Getting Started

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173`

3. Explore the application features:
   - View existing posts
   - Create new posts
   - Like posts
   - Delete posts
   - View statistics

## 🎨 Component Overview

### Layout Components
- **Header**: Navigation and branding
- **Footer**: Copyright and links
- **Sidebar**: Additional content area

### Post Components
- **PostCard**: Individual post with interactions
- **PostList**: Container for all posts
- **CreatePost**: Form for creating new posts
- **Stats**: Display post statistics

### Shared Components
- **Button**: Reusable button with variants
- **Card**: Flexible card container
- **ContactForm**: Contact form component
- **Counter**: Demonstration of state management
- **TodoList**: Todo list with CRUD operations
- **Toggle**: Toggle switch component
- **UserGreeting**: Conditional greeting display

## 🔧 Customization

### Adding New Components
1. Create component in appropriate folder (`Layout/`, `Post/`, or `shared/`)
2. Export as default
3. Import and use in parent components

### Styling
- Modify `App.css` for component-specific styles
- Update `index.css` for global styles
- Follow BEM naming conventions for CSS classes

## 📱 Responsive Design

The application is built with a mobile-first approach:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Demo**: [Deployed Application](https://your-app-url.com)
- **Repository**: [GitHub Repository](https://github.com/peterfficials6/iyf-s10-week-08-peterfficials6)
- **Issues**: [Report Issues](https://github.com/peterfficials6/iyf-s10-week-08-peterfficials6/issues)

---

Built with ❤️ using React + Vite
