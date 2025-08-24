import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const services = [
    {
      icon: 'TrendingUp',
      title: 'Аналитика ЦА',
      description: 'Изучаем поведение и интересы вашей аудитории на основе данных'
    },
    {
      icon: 'Video',
      title: 'Создание контента',
      description: 'Производство 30 уникальных роликов для всех платформ'
    },
    {
      icon: 'Users',
      title: 'Управление аккаунтами',
      description: 'Прогрев и SEO-оптимизация профилей в ТикТок, Instagram, YouTube'
    },
    {
      icon: 'MessageSquare',
      title: 'Конвертеры',
      description: 'Настройка воронок и автоматизация получения заявок'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Аналитика',
      description: 'Изучаем ЦА и анализируем конкурентов'
    },
    {
      step: '02', 
      title: 'Стратегия',
      description: 'Разрабатываем контент-план и сценарии'
    },
    {
      step: '03',
      title: 'Производство',
      description: 'Съемка и монтаж видеоконтента'
    },
    {
      step: '04',
      title: 'Публикация',
      description: 'Размещение и постаналитика эффективности'
    }
  ];

  const stats = [
    { number: '200М+', label: 'Охват аудитории' },
    { number: '90', label: 'Единиц контента' },
    { number: '3', label: 'Платформы' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-foreground">ContentFlow</div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#process" className="text-muted-foreground hover:text-primary transition-colors">Процесс</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button>Консультация</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Контент-воронки
              <br />
              <span className="text-primary">под ключ</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Создаём источники трафика в YouTube, Instagram и TikTok на основе аналитики. 
              Автоматизируем получение заявок через контент-маркетинг.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="px-8 py-3">
                <Icon name="Play" className="mr-2 h-4 w-4" />
                Смотреть кейсы
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Получить стратегию
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Что мы делаем
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный цикл создания контент-воронок с акцентом на аналитику и измеримые результаты
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Как мы работаем
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Структурированный подход к созданию контент-воронок от аналитики до результата
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-lg">{item.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Готовы запустить контент-воронку?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Получите персональную стратегию для вашего бизнеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="px-8 py-3">
              <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
              Написать в Telegram
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 border-white/20 text-white hover:bg-white/10">
              Заказать звонок
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-muted/10 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-bold text-xl text-foreground mb-4">ContentFlow</div>
              <p className="text-muted-foreground text-sm">
                Агентство контент-маркетинга<br />
                Создание воронок под ключ
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Telegram: @contentflow_agency</p>
                <p>Email: hello@contentflow.ru</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Платформы</h4>
              <div className="flex space-x-4">
                <Icon name="Youtube" className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Instagram" className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Music" className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 ContentFlow. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}