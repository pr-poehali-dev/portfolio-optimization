import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "NFT Marketplace",
      category: "Веб-дизайн",
      description: "Современный маркетплейс NFT с интуитивным интерфейсом и яркими акцентами",
      image: "https://cdn.poehali.dev/files/bf15e0a6-6d8f-4478-9095-4a3c2b29c2e6.jpg",
      tags: ["UX/UI", "Web Design", "NFT"]
    },
    {
      id: 2,
      title: "Instagram Post Design",
      category: "Соцсети",
      description: "Динамичный дизайн для социальных сетей с градиентными эффектами",
      image: "https://cdn.poehali.dev/files/dba42e3d-da71-4be0-bad3-9e747928a37d.png",
      tags: ["Social Media", "Instagram", "Design"]
    },
    {
      id: 3,
      title: "BMW Website",
      category: "Веб-дизайн", 
      description: "Премиальный автомобильный сайт с элегантным дизайном",
      image: "https://cdn.poehali.dev/files/af10753b-0d6a-4887-824e-ff6d0363eb34.png",
      tags: ["Web Design", "Automotive", "Premium"]
    },
    {
      id: 4,
      title: "K9Z Brand Identity",
      category: "Брендинг",
      description: "Мощная айдентика с динамичной графикой и яркими акцентами",
      image: "https://cdn.poehali.dev/files/e8a54abc-e34f-475b-93dd-0c6c881257aa.jpg", 
      tags: ["Branding", "Identity", "Streetwear"]
    },
    {
      id: 5,
      title: "Manga Series",
      category: "Манга",
      description: "Авторская манга с проработанным сюжетом и персонажами",
      image: "https://cdn.poehali.dev/files/988cd1cc-f60e-44b5-bdfb-137e42b1442a.png",
      tags: ["Manga", "Illustration", "Storytelling"]
    }
  ];

  const skills = [
    { name: "Веб-дизайн", level: 95, icon: "Monitor" },
    { name: "Графический дизайн", level: 90, icon: "Palette" },
    { name: "UI/UX", level: 88, icon: "Smartphone" },
    { name: "Брендинг", level: 85, icon: "Award" },
    { name: "Манга", level: 92, icon: "BookOpen" },
    { name: "Соцсети", level: 87, icon: "Share2" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gradient">Portfolio</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">Проекты</a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors">Навыки</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Обо мне</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="sm" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="relative mb-8">
              <div className="absolute inset-0 gradient-bg animate-gradient-shift rounded-full w-32 h-32 mx-auto opacity-20 blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/files/e451959c-0dfe-41aa-a45c-bcbca4b25c57.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary relative z-10"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              <span className="text-gradient">Креативный</span>
              <br />
              Дизайнер
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
              Создаю уникальные веб-дизайны, брендинг и мангу. 
              От концепции до реализации — воплощаю идеи в жизнь.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
              <Button size="lg" className="text-lg px-8 py-6 hover-lift">
                <Icon name="Eye" size={20} className="mr-2" />
                Смотреть работы
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover-lift">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Проекты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Избранные работы, демонстрирующие мой подход к дизайну и креативности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="overflow-hidden hover-lift animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <Button variant="ghost" size="sm">
                      <Icon name="ExternalLink" size={16} />
                    </Button>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Навыки</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональные компетенции и инструменты, которыми я владею
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Icon name={skill.icon as any} size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <div className="text-sm text-muted-foreground">{skill.level}%</div>
                  </div>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="gradient-bg h-2 rounded-full transition-all duration-1000"
                    style={{width: `${skill.level}%`}}
                  ></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Обо мне</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left animate-fade-in">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Я — креативный дизайнер с многолетним опытом создания уникальных 
                  веб-проектов, брендинга и графического дизайна. Специализируюсь на 
                  современных интерфейсах и необычных творческих решениях.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Особая страсть — создание манги и работа с NFT-проектами. 
                  Имею собственную команду для реализации крупных проектов 
                  и всегда открыт для интересных предложений.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <Icon name="MapPin" size={20} className="text-primary mr-2" />
                    <span>Москва, Россия</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Calendar" size={20} className="text-primary mr-2" />
                    <span>5+ лет опыта</span>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-scale-in">
                <div className="absolute inset-0 gradient-bg rounded-2xl opacity-20 blur-2xl"></div>
                <Card className="p-8 relative">
                  <h3 className="text-2xl font-bold mb-4">Что я делаю</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Icon name="Palette" size={20} className="text-primary mr-3" />
                      <span>Веб-дизайн и UI/UX</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Award" size={20} className="text-primary mr-3" />
                      <span>Брендинг и айдентика</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="BookOpen" size={20} className="text-primary mr-3" />
                      <span>Создание манги</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Zap" size={20} className="text-primary mr-3" />
                      <span>NFT и крипто-дизайн</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Связаться</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Готов обсудить ваш проект и воплотить самые смелые идеи в жизнь
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="p-6 hover-lift animate-fade-in">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">hello@designer.com</p>
            </Card>
            
            <Card className="p-6 hover-lift animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Telegram</h3>
              <p className="text-muted-foreground">@designer_tg</p>
            </Card>
            
            <Card className="p-6 hover-lift animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Instagram" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Instagram</h3>
              <p className="text-muted-foreground">@designer_insta</p>
            </Card>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <Button size="lg" className="text-lg px-12 py-6 hover-lift">
              <Icon name="Send" size={20} className="mr-2" />
              Написать сообщение
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold text-gradient mb-4">Portfolio</div>
          <p className="text-muted-foreground mb-6">
            Создаю уникальные дизайн-решения с 2019 года
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm">
              <Icon name="Github" size={20} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Dribbble" size={20} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Linkedin" size={20} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Twitter" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;