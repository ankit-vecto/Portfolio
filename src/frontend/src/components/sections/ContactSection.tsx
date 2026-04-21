import { SectionHeader } from "@/components/sections/AboutSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";
import {
  AlertCircle,
  CheckCircle,
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Enter a valid email";
  if (!form.subject.trim()) errors.subject = "Subject is required";
  if (!form.message.trim()) errors.message = "Message is required";
  else if (form.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters";
  return errors;
}

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "02.ankit.kushwaha@gmail.com",
    href: "mailto:02.ankit.kushwaha@gmail.com",
    ocid: "contact.email.link",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ankitkushwaha",
    href: "https://github.com/ankitkushwaha",
    ocid: "contact.github.link",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ankitkushwaha",
    href: "https://linkedin.com/in/ankitkushwaha",
    ocid: "contact.linkedin.link",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
];

const SPRING = { type: "spring" as const, stiffness: 80, damping: 18 };

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleBlur = (field: keyof FormState) => {
    const fieldErrors = validate(form);
    if (fieldErrors[field])
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      alert("Failed to send message ❌");
    }

    setSubmitting(false);
  };
  return (
    <section
      id="contact"
      className="py-32 px-6 sm:px-8 bg-muted/20 section-offset relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background orbs */}
      <div className="absolute bottom-0 right-1/4 w-96 h-64 rounded-full bg-primary/6 blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-accent/6 blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <SectionHeader
          index="05"
          label="Get In Touch"
          heading={
            <>
              Let's <span className="gradient-accent-text">Connect</span>
            </>
          }
          id="contact-heading"
          description="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ ...SPRING, delay: 0.1 }}
            className="space-y-7"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 heading-tight">
                Drop me a message
              </h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">
                Whether it's a job opportunity, freelance project, or just a
                hello — I respond to all messages within 24 hours.
              </p>
            </div>

            <div className="space-y-3.5">
              {CONTACT_ITEMS.map(
                (
                  { icon: Icon, label, value, href, ocid, color, bg, border },
                  i,
                ) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ ...SPRING, delay: 0.2 + i * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 p-4 glass-card rounded-2xl hover:border-primary/30 hover:shadow-glass transition-spring group"
                    data-ocid={ocid}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl ${bg} border ${border} flex items-center justify-center ${color} flex-shrink-0 group-hover:scale-110 transition-spring`}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground font-mono">
                        {label}
                      </p>
                      <p className="text-sm font-medium text-foreground truncate">
                        {value}
                      </p>
                    </div>
                  </motion.a>
                ),
              )}
            </div>

            {/* Social quick links */}
            <div className="flex gap-3 pt-1">
              {[
                {
                  href: "https://github.com/ankitkushwaha",
                  Icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://linkedin.com/in/ankitkushwaha",
                  Icon: Linkedin,
                  label: "LinkedIn",
                },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-glow-primary transition-premium"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ ...SPRING, delay: 0.15 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="glass-card rounded-3xl p-10 text-center space-y-5 h-full flex flex-col items-center justify-center"
                data-ocid="contact.form.success_state"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                    delay: 0.15,
                  }}
                  className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto"
                >
                  <CheckCircle className="h-9 w-9 text-primary" />
                </motion.div>
                <h3 className="font-display text-2xl font-bold text-foreground heading-tight">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground text-sm leading-[1.8]">
                  Thanks for reaching out! I'll get back to you within 24 hours.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-2 border-border/50 hover:border-primary/40"
                  data-ocid="contact.send_another.button"
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-3xl p-8 shadow-glass space-y-5"
                noValidate
                data-ocid="contact.form"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    id="contact-name"
                    label="Name"
                    error={errors.name}
                    errorId="name-error"
                    ocid="contact.name.input"
                    errorOcid="contact.name.field_error"
                  >
                    <Input
                      id="contact-name"
                      placeholder="Ankit Kushwaha"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className="bg-background/40 border-border/50 focus:border-primary/50 input-glow"
                      data-ocid="contact.name.input"
                    />
                  </FormField>

                  <FormField
                    id="contact-email"
                    label="Email"
                    error={errors.email}
                    errorId="email-error"
                    ocid="contact.email.input"
                    errorOcid="contact.email.field_error"
                  >
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      className="bg-background/40 border-border/50 focus:border-primary/50 input-glow"
                      data-ocid="contact.email.input"
                    />
                  </FormField>
                </div>

                <FormField
                  id="contact-subject"
                  label="Subject"
                  error={errors.subject}
                  errorId="subject-error"
                  ocid="contact.subject.input"
                  errorOcid="contact.subject.field_error"
                >
                  <Input
                    id="contact-subject"
                    placeholder="Project collaboration, Job opportunity..."
                    value={form.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    onBlur={() => handleBlur("subject")}
                    aria-invalid={!!errors.subject}
                    aria-describedby={
                      errors.subject ? "subject-error" : undefined
                    }
                    className="bg-background/40 border-border/50 focus:border-primary/50 input-glow"
                    data-ocid="contact.subject.input"
                  />
                </FormField>

                <FormField
                  id="contact-message"
                  label="Message"
                  error={errors.message}
                  errorId="message-error"
                  ocid="contact.message.textarea"
                  errorOcid="contact.message.field_error"
                >
                  <Textarea
                    id="contact-message"
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className="bg-background/40 border-border/50 focus:border-primary/50 input-glow min-h-[130px] resize-none"
                    data-ocid="contact.message.textarea"
                  />
                </FormField>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-elevated glow-primary-hover transition-premium font-semibold font-display tracking-tight shimmer"
                  data-ocid="contact.submit_button"
                >
                  {submitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full mr-2"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  errorId: string;
  ocid: string;
  errorOcid: string;
  children: React.ReactNode;
}

function FormField({
  id,
  label,
  error,
  errorId,
  errorOcid,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium font-body">
        {label} <span className="text-destructive">*</span>
      </Label>
      {children}
      {error && (
        <p
          id={errorId}
          className="text-xs text-destructive flex items-center gap-1.5"
          data-ocid={errorOcid}
        >
          <AlertCircle className="h-3 w-3 flex-shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}
