
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ExternalLink, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Gradient with Noise */}
      <div className="fixed inset-0 opacity-20 dark:opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-red-600 dark:from-blue-800 dark:via-purple-800 dark:to-red-800 animate-gradient-xy"></div>
        <div className="absolute inset-0 opacity-50 bg-noise"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src="/lovable-uploads/bffd8948-15f5-4d83-958e-abad6866dc64.png" 
                alt="Segway Ninebot ZT3 Pro" 
                className="h-48 md:h-64 object-contain drop-shadow-2xl"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Нужны ли права на мой самокат?
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
            Segway Ninebot ZT3 Pro
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный разбор правового статуса электросамоката с максимальной конструктивной скоростью 25 км/ч
          </p>
        </div>

        {/* Quick Answer */}
        <Card className="mb-8 border-2 border-green-500/50 bg-green-50/50 dark:bg-green-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
              <CheckCircle className="h-6 w-6" />
              Краткий ответ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold text-green-800 dark:text-green-300">
              НЕТ, права НЕ нужны! Ваш Segway Ninebot ZT3 Pro является СИМ (Средством Индивидуальной Мобильности) согласно российскому законодательству.
            </p>
          </CardContent>
        </Card>

        {/* Technical Specifications */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle>Технические характеристики с шильдика</CardTitle>
            <CardDescription>Официальная информация от производителя</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/1b6c282f-3b1a-4fa5-a273-67a213dc4af2.png" 
                alt="Шильдик Segway ZT3 Pro" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Модель:</span>
                  <span>051801A</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Макс. нагрузка:</span>
                  <span>120 кг (265 lbs)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Вес:</span>
                  <span>~29.7 кг (65.5 lbs)</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Мощность:</span>
                  <span>650 W</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Макс. скорость:</span>
                  <Badge variant="outline" className="text-green-600 dark:text-green-400 border-green-500">
                    25 км/ч (15.5 mph)
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Год производства:</span>
                  <span>2024</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* App Screenshot */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle>Подтверждение из приложения</CardTitle>
            <CardDescription>Настройки скорости в официальном приложении</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center mb-4">
              <img 
                src="/lovable-uploads/868e3238-a490-4a8b-905b-a33602ab0469.png" 
                alt="Настройки приложения" 
                className="max-w-xs h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                В приложении видно, что максимальная скорость во всех режимах не превышает 25 км/ч
              </p>
              <div className="flex justify-center gap-2 flex-wrap">
                <Badge variant="secondary">ECO: 15 км/ч</Badge>
                <Badge variant="secondary">Drive: 20 км/ч</Badge>
                <Badge variant="secondary">Sport: 25 км/ч</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legal Framework */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle>Правовое обоснование</CardTitle>
            <CardDescription>Как электросамокат превращается в мопед</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/1877a911-3f4f-4aa8-b873-33cd30e17423.png" 
                alt="Логическая цепочка перехода СИМ в мопед" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  Ключевой критерий: Конструктивная скорость {'>'}  25 км/ч
                </h4>
                <p className="text-blue-700 dark:text-blue-400 text-sm">
                  Если конструктивно (после перепрошивки, снятия ограничителя и т.п.) скорость {'>'} 25 км/ч → устройство выбывает из СИМ → ГОСТ 70514 перестаёт работать → ТР ТС 018/2011 относит устройство к категории L → ПДД называют эту категорию «мопедом» → это уже механическое ТС, а значит требуются права, регистрация, шлем и езда по проезжей части.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Regional Differences */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle>Региональные различия модификаций</CardTitle>
            <CardDescription>Почему важна европейская версия</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  EU версия (у вас)
                </h4>
                <ul className="space-y-1 text-sm">
                  <li>• Макс. скорость: 25 км/ч</li>
                  <li>• Соответствует ПДД РФ</li>
                  <li>• Является СИМ</li>
                  <li>• Права НЕ нужны</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  US/CN/GR версии
                </h4>
                <ul className="space-y-1 text-sm">
                  <li>• Макс. скорость: 30+ км/ч</li>
                  <li>• НЕ соответствует ПДД РФ</li>
                  <li>• Считается мопедом</li>
                  <li>• Нужны права категории M</li>
                </ul>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">
                <strong>Источник приобретения:</strong> Самокат приобретён с рук у предыдущего владельца, который покупал его в магазине segwave.ru, где продаются исключительно европейские версии с ограничением 25 км/ч.
              </p>
              <p>
                <strong>Вес устройства:</strong> До 35 кг, что позволяет передвигаться по тротуарам согласно ПДД РФ.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Legal References */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle>Нормативные документы</CardTitle>
            <CardDescription>Ссылки на официальные источники</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
                    Предстоящие изменения в законодательстве
                  </h4>
                  <p className="text-amber-700 dark:text-amber-400 text-sm mb-3">
                    Только сейчас предлагают ввести полноценные права на СИМ определённой мощности
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.garant.ru/news/1802777/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Читать на Гарант.ру
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                    Декларация соответствия Segway Ninebot
                  </h4>
                  <p className="text-green-700 dark:text-green-400 text-sm mb-3">
                    Официальный документ подтверждает, что бренд Segway Ninebot не относит свои устройства к мопедам (исключая линейку грузовых самокатов и мощных моделей)
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://cdn.vseinstrumenti.ru/img/certificate_compliance/2077557/432608.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Посмотреть декларацию (PDF)
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="glass-card border-2 border-blue-500/50">
          <CardHeader>
            <CardTitle className="text-center">Контакты владельца</CardTitle>
            <CardDescription className="text-center">
              Вы просто случайный прохожий, просканировавший QR-код на моём самокате? Прикольно! 😄
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4 text-muted-foreground">
              Мои контакты для связи тут, а почему бы и нет)
            </p>
            <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <a href="https://t.me/NKSV_ILYA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <ExternalLink className="h-5 w-5" />
                Написать в Telegram
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>Апрель 2025 • Памятка о правовом статусе электросамокатов</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
