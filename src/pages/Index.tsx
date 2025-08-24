import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const services = [
    {
      icon: 'BarChart3',
      title: 'Аналитика ниши и ЦА',
      description: 'Изучаем 50+ единиц контента, собираем паттерны спроса, ставим точные гипотезы'
    },
    {
      icon: 'Video',
      title: 'Продакшн батчами',
      description: 'Производство 25-30 шортов в месяц с полным циклом: от сценария до монтажа'
    },
    {
      icon: 'Bot',
      title: 'Встроенный TG-бот',
      description: 'Захват, квалификация лидов и автоматическая запись на созвон'
    },
    {
      icon: 'TrendingUp',
      title: 'Постаналитика',
      description: 'Еженедельные итерации на основе метрик и оптимизация воронки'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Аналитика и стратегия',
      description: 'Интервью, аудит, анализ 50+ единиц контента, построение гипотез'
    },
    {
      step: '02', 
      title: 'Подготовка',
      description: 'Контент-план, воронка, тексты конвертеров, кастинг и локации'
    },
    {
      step: '03',
      title: 'Продакшн',
      description: '2 захода съёмок, монтаж, контроль качества контента'
    },
    {
      step: '04',
      title: 'Публикации',
      description: 'Выкладка по графику, отчёт, новые гипотезы для следующего цикла'
    }
  ];

  const stats = [
    { number: '200М+', label: 'Русскоязычная аудитория' },
    { number: '50М+', label: 'Просмотров на проектах' },
    { number: '3', label: 'Платформы: TT/IG/YT' }
  ];

  const packages = [
    {
      name: 'БАЗА',
      price: '130 000 ₽/мес',
      features: [
        'Запуск и прогрев аккаунтов (TT/IG/YT)',
        'Контент-план на месяц',
        'Конвертеры и TG-бот (5-7 шагов)',
        'Сценарии и поиск актёров/локаций',
        'Съёмка и монтаж',
        '30 уникальных шортов (~90 постов)',
        'Постаналитика и план следующего батча'
      ]
    }
  ];

  const addons = [
    { name: 'Стратегия/аналитика', price: '40 000 ₽', description: 'CJM, анализ 50+ единиц, паттерны роста' },
    { name: 'Длинное видео (до 15 мин)', price: '27 000 ₽', description: 'Полный цикл производства' },
    { name: 'Подкаст (до 1,5ч)', price: '30 000 ₽', description: 'С поиском гостя' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-foreground">A-Production</div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#process" className="text-muted-foreground hover:text-primary transition-colors">Процесс</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Цены</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button>Получить разбор</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Строим контент-воронки
                <br />
                <span className="text-primary">под ключ</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                YouTube • Instagram • TikTok → заявки, а не «ещё ролики».
              </p>
              <div className="bg-card/50 border border-border rounded-lg p-6 mb-8">
                <p className="text-foreground mb-2">
                  <strong>УТП:</strong> мы контент-маркетологи. Решения рождаем из аналитики, а не из головы:
                </p>
                <p className="text-muted-foreground">
                  изучаем 50+ единиц контента в вашей нише, собираем паттерны спроса, ставим гипотезы — и проверяем их цифрами.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="px-8 py-3">
                  <Icon name="Play" className="mr-2 h-4 w-4" />
                  Получить 15-мин разбор
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3">
                  Примеры работ
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/68f10388-508f-42dc-9978-fa1a0acdda3b.jpg" 
                alt="Analytics Dashboard" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
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
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Что именно мы делаем
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Создаём контент-воронку под ключ, которая даёт лиды и автоматизирует путь заявки
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group bg-card/80 border-border">
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

          <div className="text-center mt-12">
            <div className="bg-card/50 border border-border rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-foreground">
                <strong>Почему сейчас:</strong> русскоязычная аудитория видео — 200М+ человек. 
                Контент масштабируется и даёт дешёвые касания на каждом этапе воронки.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-64 opacity-10">
          <img 
            src="/img/015c53f7-d812-493a-9588-6f75419e5018.jpg" 
            alt="Video Production" 
            className="w-full h-full object-cover rounded-l-2xl"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Как мы работаем
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              6 недель = 1 цикл. Через 2–3 цикла видим устойчивые паттерны роста и масштабируем форматы
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Пакеты и цены
            </h2>
          </div>
          
          {/* Main Package */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="p-8 bg-card/80 border-border">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">БАЗА</h3>
                <div className="text-4xl font-bold text-primary mb-4">130 000 ₽ / мес</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Включено:</h4>
                  <ul className="space-y-2">
                    {packages[0].features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Icon name="Check" className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-4">&nbsp;</h4>
                  <ul className="space-y-2">
                    {packages[0].features.slice(4).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Icon name="Check" className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button size="lg" className="px-8 py-3">
                  Выбрать пакет БАЗА
                </Button>
              </div>
            </Card>
          </div>

          {/* Add-ons */}
          <div>
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">Дополнительные услуги</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {addons.map((addon, index) => (
                <Card key={index} className="p-6 bg-card/80 border-border">
                  <h4 className="font-semibold text-foreground mb-2">{addon.name}</h4>
                  <div className="text-2xl font-bold text-primary mb-3">{addon.price}</div>
                  <p className="text-muted-foreground text-sm mb-4">{addon.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Добавить
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-64 opacity-10">
          <img 
            src="/img/bdadeea0-4a05-4a6b-a867-47205b183c02.jpg" 
            alt="Marketing Funnel" 
            className="w-full h-full object-cover rounded-r-2xl"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Примеры и пруфы
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Мы честно говорим о методе и цифрах:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1,5 млн</div>
              <div className="text-sm text-muted-foreground">просмотров за 12 дней</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">+100</div>
              <div className="text-sm text-muted-foreground">новых пользователей за 8 видео</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50М+</div>
              <div className="text-sm text-muted-foreground">просмотров на проектах</div>
            </div>
          </div>
          
          <div className="bg-card/50 border border-border rounded-lg p-6">
            <p className="text-foreground">
              Мы не обещаем «вирусность завтра». Мы обещаем метод и работу по метрикам.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90"></div>
        <div className="max-w-4xl mx-auto text-center px-4 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Бесплатный разбор аккаунтов
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Составим примерную стратегию для продвижения. Понравятся наши условия — начнём работу, 
            если нет — останется стратегия, которую можно использовать самим.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="px-8 py-3">
              <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
              Получить разбор
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 border-white/20 text-white hover:bg-white/10">
              Собрать свой пакет
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-secondary/20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-bold text-xl text-foreground mb-4">A-Production</div>
              <p className="text-muted-foreground text-sm">
                Строим контент-воронки под ключ<br />
                YouTube • Instagram • TikTok
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Telegram: @arrlyandyou</p>
                <p>Договор/КП — по запросу</p>
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
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 A-Production. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}