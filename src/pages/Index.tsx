import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, CheckCircle, XCircle, AlertCircle, ZoomIn, FileText, Smartphone, Scale } from 'lucide-react';

const Index = () => {
  const basePath = import.meta.env.BASE_URL || '';

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const applyTheme = (e: MediaQueryList | MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    applyTheme(mediaQuery);
    mediaQuery.addEventListener('change', applyTheme);

    return () => mediaQuery.removeEventListener('change', applyTheme);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Styled image container with geometric background */}
              <div className="relative p-12">
                {/* Geometric background elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-96 h-96 rounded-full border-4 border-red-500/20"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 rounded-full border-2 border-red-400/30"></div>
                </div>
                
                {/* Main image with enhanced styling */}
                <img 
                  src={basePath + "uploads/bffd8948-15f5-4d83-958e-abad6866dc64.png"}
                  alt="Segway Ninebot ZT3 Pro"
                  className="relative z-10 h-80 object-contain border-4 border-red-500 rounded-2xl bg-gray-800/50 backdrop-blur-sm p-4 shadow-2xl shadow-red-500/20"
                />
                
                {/* Decorative corner elements */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-4 border-t-4 border-red-400"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-r-4 border-t-4 border-red-400"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-4 border-b-4 border-red-400"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-4 border-b-4 border-red-400"></div>
              </div>
            </div>
          </div>
          
          <h1 className="text-7xl font-bold mb-6 text-white">
            Нужны ли права на мой самокат?
          </h1>
          <h2 className="text-4xl font-semibold mb-6 text-red-500">
            Segway Ninebot ZT3 Pro
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Подробный разбор правового статуса электросамоката с максимальной конструктивной скоростью 25 км/ч согласно российскому законодательству
          </p>
        </div>

        {/* Quick Answer */}
        <Card className="mb-12 border-2 border-green-500 bg-gray-800/50 backdrop-blur-sm shadow-2xl shadow-green-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-green-400 text-2xl">
              <CheckCircle className="h-8 w-8" />
              Краткий ответ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold text-green-300">
              НЕТ, права НЕ нужны! Этот Segway Ninebot ZT3 Pro является СИМ (Средством Индивидуальной Мобильности) согласно российскому законодательству.
            </p>
          </CardContent>
        </Card>

        {/* Evidence Section */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Technical Specs */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="bg-gray-800/50 border-gray-700 hover:border-red-500 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-red-500/20 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <FileText className="h-12 w-12 text-red-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-red-500 text-lg">Шильдик устройства</CardTitle>
                  <CardDescription className="text-gray-400 text-sm">Официальные характеристики</CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Badge variant="outline" className="text-green-400 border-green-500 mb-2">
                    Макс. скорость: 25 км/ч
                  </Badge>
                  <p className="text-sm text-gray-400 flex items-center justify-center gap-1">
                    <ZoomIn className="h-4 w-4" />
                    Нажмите для увеличения
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-800 border-gray-700">
              <DialogHeader>
                <DialogTitle className="text-red-500 text-xl">Технические характеристики с шильдика</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <img 
                  src={basePath + "uploads/1b6c282f-3b1a-4fa5-a273-67a213dc4af2.png"}
                  alt="Шильдик Segway ZT3 Pro"
                  className="w-full rounded-lg max-h-96 object-contain mx-auto"
                />
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Модель:</span>
                      <span className="text-white">051801A</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Макс. нагрузка:</span>
                      <span className="text-white">120 кг</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Вес:</span>
                      <span className="text-white">~29.7 кг</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Мощность:</span>
                      <span className="text-white">650 W</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Макс. скорость:</span>
                      <span className="text-green-400 font-semibold">25 км/ч</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Год:</span>
                      <span className="text-white">2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* App Screenshot */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="bg-gray-800/50 border-gray-700 hover:border-red-500 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-red-500/20 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <Smartphone className="h-12 w-12 text-red-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-red-500 text-lg">Приложение</CardTitle>
                  <CardDescription className="text-gray-400 text-sm">Настройки скорости</CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <div className="flex justify-center gap-1 flex-wrap mb-2">
                    <Badge variant="secondary" className="text-xs bg-gray-700 text-white">ECO: 15</Badge>
                    <Badge variant="secondary" className="text-xs bg-gray-700 text-white">Drive: 20</Badge>
                    <Badge variant="secondary" className="text-xs bg-gray-700 text-white">Sport: 25</Badge>
                  </div>
                  <p className="text-sm text-gray-400 flex items-center justify-center gap-1">
                    <ZoomIn className="h-4 w-4" />
                    Нажмите для увеличения
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gray-800 border-gray-700">
              <DialogHeader>
                <DialogTitle className="text-red-500 text-xl">Подтверждение из приложения</DialogTitle>
              </DialogHeader>
              <div className="text-center space-y-4">
                <img 
                  src={basePath + "uploads/868e3238-a490-4a8b-905b-a33602ab0469.png"}
                  alt="Настройки приложения"
                  className="max-w-full max-h-96 mx-auto rounded-lg object-contain"
                />
                <p className="text-gray-300 text-base">
                  В официальном приложении видно, что максимальная скорость во всех режимах не превышает 25 км/ч
                </p>
                <div className="flex justify-center gap-2 flex-wrap">
                  <Badge variant="outline" className="border-blue-500 text-blue-400">ECO: 15 км/ч</Badge>
                  <Badge variant="outline" className="border-yellow-500 text-yellow-400">Drive: 20 км/ч</Badge>
                  <Badge variant="outline" className="border-red-500 text-red-400">Sport: 25 км/ч</Badge>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Legal Logic */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="bg-gray-800/50 border-gray-700 hover:border-red-500 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-red-500/20 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <Scale className="h-12 w-12 text-red-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-red-500 text-lg">Правовая логика</CardTitle>
                  <CardDescription className="text-gray-400 text-sm">Когда СИМ становится мопедом</CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-sm text-gray-300 mb-2">
                    Разбор перехода статуса при превышении 25 км/ч
                  </p>
                  <p className="text-sm text-gray-400 flex items-center justify-center gap-1">
                    <ZoomIn className="h-4 w-4" />
                    Нажмите для увеличения
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-gray-800 border-gray-700">
              <DialogHeader>
                <DialogTitle className="text-red-500 text-xl">Правовая логика перехода СИМ в мопед</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <img 
                  src={basePath + "uploads/1877a911-3f4f-4aa8-b873-33cd30e17423.png"}
                  alt="Логическая цепочка перехода СИМ в мопед"
                  className="w-full rounded-lg max-h-96 object-contain mx-auto"
                />
                <div className="p-4 bg-red-950/30 rounded-lg border border-red-500/30">
                  <h4 className="font-semibold text-red-400 mb-2 text-base">
                    Ключевой критерий: Конструктивная скорость {'>'} 25 км/ч
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Если конструктивно (после перепрошивки, снятия ограничителя и т.п.) скорость {'>'} 25 км/ч → 
                    устройство выбывает из СИМ → ГОСТ 70514 перестаёт работать → ТР ТС 018/2011 относит устройство к категории L → 
                    ПДД называют эту категорию «мопедом» → это уже механическое ТС, требующее права, регистрацию, шлем и езду по проезжей части.
                  </p>
                  <div className="mt-3 p-3 bg-gray-800/50 rounded border-l-4 border-blue-500">
                    <p className="text-blue-400 text-sm font-medium">
                      Важно: Мощность электродвигателя НЕ является определяющим критерием до превышения конструктивной скорости 25 км/ч согласно ПДД п.1.2 и ГОСТ Р 70514-2022. Также разгон &gt;25 километров в час который достигается за счёт, например, съезда с горки не идёт в счёт классификации транспортного средства.
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Regional Versions */}
        <Card className="mb-12 bg-gray-800/50 border-gray-700 shadow-2xl backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-red-500 text-2xl">Региональные различия модификаций</CardTitle>
            <CardDescription className="text-gray-400">Почему важна именно версия с ограничением 25 км/ч</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="p-4 bg-green-950/30 rounded-lg border border-green-500/30">
                <h4 className="font-semibold text-green-400 mb-3 flex items-center gap-2 text-base">
                  <CheckCircle className="h-5 w-5" />
                  Версия (у меня)
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Макс. скорость из коробки: 25 км/ч</li>
                  <li>• Соответствует ПДД РФ</li>
                  <li>• Является СИМ</li>
                  <li>• Права НЕ нужны</li>
                  <li>• Вес до 35 кг → можно по тротуару</li>
                </ul>
              </div>
              <div className="p-4 bg-red-950/30 rounded-lg border border-red-500/30">
                <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-2 text-base">
                  <XCircle className="h-5 w-5" />
                  US/CN версии (у меня НЕ такие)
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Макс. скорость: 32+ км/ч</li>
                  <li>• НЕ соответствует ПДД РФ</li>
                  <li>• Считается мопедом</li>
                  <li>• Нужны права категории M * </li>
                  <li>• Регистрация, шлем, по дороге</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-700/50 rounded-lg">
              <p className="text-sm text-gray-300 mb-2">
                <span className="text-red-500 font-medium">Источник приобретения:</span> Самокат приобретён с рук у предыдущего владельца, 
                который покупал его в магазине segwave.ru, где продаются исключительно версии с ограничением 25 км/ч.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Legal Framework */}
        <Card className="mb-12 bg-gray-800/50 border-gray-700 shadow-2xl backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-red-500 text-2xl">Правовое обоснование</CardTitle>
            <CardDescription className="text-gray-400">Ключевые документы и нормы</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* ПДД */}
            <div className="p-6 bg-blue-950/20 rounded-lg border border-blue-500/30">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                <h4 className="font-semibold text-blue-400 text-base">ПДД РФ от 23.10.1993 №1090 (ред. от 27.03.2025), пункт 1.2</h4>
                <Button variant="outline" size="sm" asChild className="border-blue-500 text-blue-400 hover:bg-blue-500/10 w-fit">
                  <a href="https://www.consultant.ru/document/cons_doc_LAW_2709/5894b193fda5648afe1c1a5e70c028f25cd29099/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Источник
                  </a>
                </Button>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-800/50 p-4 rounded border-l-4 border-green-500">
                  <p className="text-green-400 font-medium mb-2">«Средство индивидуальной мобильности»</p>
                  <p className="text-gray-300">транспортное средство, имеющее одно или несколько колёс, предназначенное для индивидуального передвижения человека посредством использования двигателя (электросамокаты, электроскейтборды, гироскутеры, сигвеи, моноколёса и иные аналогичные средства).</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded border-l-4 border-yellow-500">
                  <p className="text-yellow-400 font-medium mb-2">«Механическое транспортное средство»</p>
                  <p className="text-gray-300">транспортное средство, приводимое в движение двигателем. <span className="text-red-500 font-medium">Термин НЕ распространяется на средства индивидуальной мобильности</span> и велосипеды.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded border-l-4 border-red-500">
                  <p className="text-red-500 font-medium mb-2">«Мопед»</p>
                  <p className="text-gray-300">двух- или трёхколёсное <span className="text-red-500 font-medium">механическое транспортное средство</span>, максимальная конструктивная скорость которого не превышает 50 км/ч, имеющее электродвигатель номинальной максимальной мощностью в режиме длительной нагрузки более 0,25 кВт и менее 4 кВт.</p>
                </div>
              </div>
            </div>

            {/* ГОСТ */}
            <div className="p-6 bg-purple-950/20 rounded-lg border border-purple-500/30">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                <h4 className="font-semibold text-purple-400 text-base">ГОСТ Р 70514-2022 «Электрические СИМ» (выборка из п. 3.43)</h4>
                <Button variant="outline" size="sm" asChild className="border-purple-500 text-purple-400 hover:bg-purple-500/10 w-fit">
                  <a href="https://docs.cntd.ru/document/1200194451" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Источник
                  </a>
                </Button>
              </div>
              <div className="bg-gray-800/50 p-4 rounded border-l-4 border-purple-500">
                <p className="text-purple-400 font-medium mb-2">Электрическое средство индивидуальной мобильности (ЭСИМ)</p>
                <p className="text-gray-300">транспортное средство для передвижения одного человека посредством использования электродвигателя, не имеющее сиденья, <span className="text-green-500 font-medium">с максимальной конструктивной скоростью не более 25 км/ч</span>.</p>
              </div>
            </div>

            {/* ТР ТС */}
            <div className="p-6 bg-orange-950/20 rounded-lg border border-orange-500/30">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                <h4 className="font-semibold text-orange-400 text-base">ТР ТС 018/2011 «О безопасности колёсных ТС»</h4>
                <Button variant="outline" size="sm" asChild className="border-orange-500 text-orange-400 hover:bg-orange-500/10 w-fit">
                  <a href="https://www.novotest.ru/upload/medialibrary/a18/TR_TS_018_.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Источник
                  </a>
                </Button>
              </div>
              <div className="bg-gray-800/50 p-4 rounded border-l-4 border-orange-500">
                <p className="text-orange-400 font-medium mb-2">Пункт 3. Исключения</p>
                <p className="text-gray-300">Действие настоящего технического регламента <span className="text-green-500 font-medium">НЕ распространяется</span> на транспортные средства, имеющие максимальную скорость, предусмотренную их конструкцией, <span className="text-green-500 font-medium">не более 25 км/ч</span>.</p>
              </div>
            </div>

            <div className="p-6 bg-green-950/20 rounded-lg border border-green-500/30 text-center">
              <p className="text-green-400 font-medium text-lg">
                📍 Вывод: Электросамокат с конструктивной скоростью не более 25 км/ч НЕ может быть мопедом, поскольку СИМ исключены из термина «механическое транспортное средство». Мощность до превышения 25 км/ч не имеет правового значения.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Official Website Reference */}
        <Card className="mb-12 bg-gray-800/50 border-gray-700 shadow-2xl backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-red-500 text-2xl">Официальный сайт производителя</CardTitle>
            <CardDescription className="text-gray-400">Подтверждение технических характеристик</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-6 bg-blue-950/20 rounded-lg border border-blue-500/30">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                <div>
                  <h4 className="font-semibold text-blue-400 text-base mb-2">Segway Ninebot ZT3 Pro - Официальная страница</h4>
                  <p className="text-gray-300 text-sm">
                    На официальном сайте Segway указана максимальная скорость <span className="text-green-400 font-semibold">24.9 км/ч</span>, 
                    что подтверждает соответствие российским нормам для СИМ.
                  </p>
                </div>
                <Button variant="outline" size="sm" asChild className="border-blue-500 text-blue-400 hover:bg-blue-500/10 w-fit">
                  <a href="https://www.segway.com/ekickscooter/products/zt3-pro.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Перейти на сайт
                  </a>
                </Button>
              </div>
              <div className="bg-gray-800/50 p-4 rounded border-l-4 border-green-500">
                <p className="text-green-400 font-medium mb-2">Ключевые характеристики с официального сайта:</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Максимальная скорость: 24.9 км/ч (что меньше 25 км/ч)</li>
                  <li>• Мощность двигателя: 650W</li>
                  <li>• Максимальная нагрузка: 120 кг</li>
                  <li>• Вес устройства: 29.7 кг</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legal Updates */}
        <Card className="mb-12 bg-gray-800/50 border-gray-700 shadow-2xl backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-red-500 text-2xl">Актуальная информация</CardTitle>
            <CardDescription className="text-gray-400">Нормативные документы и изменения</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-amber-950/30 rounded-lg border border-amber-500/30">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-400 mb-2 text-base">
                    Предстоящие изменения в законодательстве
                  </h4>
                  <p className="text-amber-300 text-sm mb-3">
                    Только сейчас предлагают ввести полноценные права на СИМ определённой мощности
                  </p>
                  <Button variant="outline" size="sm" asChild className="border-amber-500 text-amber-400 hover:bg-amber-500/10">
                    <a href="https://www.garant.ru/news/1802777/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Читать на Гарант.ру
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-950/30 rounded-lg border border-green-500/30">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-400 mb-2 text-base">
                    Декларация соответствия Segway Ninebot
                  </h4>
                  <p className="text-green-300 text-sm mb-3">
                    Официальный документ подтверждает, что бренд Segway Ninebot не относит свои устройства к мопедам (исключая линейку грузовых самокатов и мощных моделей)
                  </p>
                  <Button variant="outline" size="sm" asChild className="border-green-500 text-green-400 hover:bg-green-500/10">
                    <a href="https://cdn.vseinstrumenti.ru/img/certificate_compliance/2077557/432608.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Посмотреть декларацию 1 (PDF)
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-4 bg-cyan-950/30 rounded-lg border border-cyan-500/30">
              <div className="flex items-start gap-3">
                <Scale className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2 text-base">
                    Исключение из ТР ТС 018/2011
                  </h4>
                  <p className="text-cyan-300 text-sm mb-3">
                    Официальное подтверждение: данный электросамокат не подлежит сертификации по регламенту ТР ТС 018/2011, а значит не может считаться мопедом.
                  </p>
                  <Button variant="outline" size="sm" asChild className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
                    <a href={`${basePath}documents/declaration.pdf`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Открыть документ (PDF)
                    </a>
                  </Button>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="bg-gray-800/50 border-2 border-red-500 shadow-2xl backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center text-red-500 text-2xl">Контакты владельца</CardTitle>
            <CardDescription className="text-center text-gray-300">
              Вы просто случайный прохожий, просканировавший QR-код на моём самокате? Прикольно! 😄
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-6 text-gray-300 text-base">
              Мои контакты для связи тут, а почему бы и нет)
            </p>
            <Button size="lg" asChild className="bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-red-500/25 transition-all duration-300">
              <a href="https://t.me/NKSV_ILYA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <ExternalLink className="h-5 w-5" />
                Написать в Telegram
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 space-y-2">
          <p className="text-sm text-gray-400">Июль 2025 • Памятка о правовом статусе электросамокатов</p>
          <p className="text-xs text-gray-500">
            ⚠️ Информация носит ознакомительный характер. Могут присутствовать юридические несоответствия и неточности. 
            Для получения точной правовой консультации обращайтесь к специалистам.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
