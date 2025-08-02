'use client';

import { motion, cubicBezier } from 'framer-motion';
import { ArrowRight, Briefcase, Code, Home as HomeIcon, Smartphone, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { navLinks, heroSection, servicesSection, appsSection, portfolioSection, importantLinksSection } from '@/lib/content-data';

// Mapeamento de ícones para não passar a referência da função diretamente
const iconMap: { [key: string]: React.ElementType } = {
  Home: HomeIcon,
  Code: Code,
  TrendingUp: TrendingUp,
  Briefcase: Briefcase,
};

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: cubicBezier(0.42, 0, 0.58, 1) },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center bg-white/80 backdrop-blur-sm shadow-sm">
        <a className="flex items-center justify-center" href="#">
          <Image src="/images/logo.png" alt="Techome Logo" width={120} height={40} />
        </a>
        <nav className="ml-auto hidden lg:flex gap-6">
          {navLinks.map((link) => (
            <a key={link.href} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <Button className="ml-4 hidden lg:inline-flex bg-blue-600 hover:bg-blue-700">
          Começar um Projeto
        </Button>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <motion.div {...fadeIn} className="flex flex-col justify-center space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {heroSection.title}
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  {heroSection.subtitle}
                </p>
                <div className="w-full max-w-sm">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    {heroSection.buttonText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
              <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }}>
                <Image
                  alt="Hero Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  height="450"
                  src={heroSection.imageUrl}
                  width="800"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div {...fadeIn} className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{servicesSection.title}</h2>
              <p className="max-w-[800px] text-gray-600 md:text-lg">{servicesSection.subtitle}</p>
            </motion.div>
            <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
              {servicesSection.services.map((service, index) => {
                const Icon = iconMap[service.icon];
                return (
                  <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: index * 0.2 }} key={service.title}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader className="flex flex-row items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{service.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Apps Section */}
        <section id="apps" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <motion.div {...fadeIn} className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{appsSection.title}</h2>
              <p className="max-w-[800px] text-gray-600 md:text-lg">{appsSection.subtitle}</p>
            </motion.div>
            <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
              {appsSection.apps.map((app, index) => {
                const Icon = iconMap[app.icon];
                return (
                  <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: index * 0.2 }} key={app.title}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader className="flex flex-row items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <CardTitle>{app.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{app.description}</p>
                        <Button variant="link" className="p-0 mt-2 text-blue-600" asChild>
                          <a href={app.link}>Ver detalhes <ArrowRight className="ml-1 h-4 w-4" /></a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div {...fadeIn} className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{portfolioSection.title}</h2>
              <p className="max-w-[800px] text-gray-600 md:text-lg">{portfolioSection.subtitle}</p>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioSection.projects.map((project, index) => (
                <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: index * 0.2 }} key={project.title}>
                  <Card className="overflow-hidden group">
                    <Image
                      alt={project.title}
                      className="aspect-video w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      height="310"
                      src={project.imageUrl}
                      width="550"
                    />
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <p className="text-sm text-gray-600">{project.description}</p>
                      <Button variant="link" className="p-0 mt-2 text-blue-600" asChild>
                        <a href={project.link}>Ver projeto <ArrowRight className="ml-1 h-4 w-4" /></a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Links Section */}
        <section id="links" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
                <motion.div {...fadeIn} className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{importantLinksSection.title}</h2>
                    <p className="max-w-[800px] text-gray-600 md:text-lg">{importantLinksSection.subtitle}</p>
                </motion.div>
                <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {importantLinksSection.links.map((link, index) => (
                        <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: index * 0.2 }} key={link.title}>
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle>{link.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">{link.description}</p>
                                    <Button variant="link" className="p-0 mt-2 text-blue-600" asChild>
                                        <a href={link.link}>Acessar <ArrowRight className="ml-1 h-4 w-4" /></a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div {...fadeIn} className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Vamos Construir Algo Incrível</h2>
              <p className="max-w-[800px] text-gray-600 md:text-lg">Preencha o formulário abaixo para começar a conversa.</p>
            </motion.div>
            <motion.div {...fadeIn} className="mx-auto w-full max-w-2xl">
              <form className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Seu nome" />
                  <Input placeholder="Seu email" type="email" />
                </div>
                <Input placeholder="Assunto" />
                <Textarea placeholder="Sua mensagem" rows={5} />
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full">Enviar Mensagem</Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <Image src="/images/logo.png" alt="Techome Logo" width={100} height={30} className="opacity-70" />
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Todos os direitos reservados.</p>
          <nav className="flex gap-4 mt-4 md:mt-0">
            {navLinks.map((link) => (
              <a key={link.href} className="text-sm hover:text-blue-400 transition-colors" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}