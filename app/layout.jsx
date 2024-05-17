import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Blog Post',
  description: 'Health and Fintess Blog',
  keywords: 'blogs, fitness, health, blog posts',
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
