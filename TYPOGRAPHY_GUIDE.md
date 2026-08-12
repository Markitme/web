# 📝 Typography Consistency Guide - MarkitMe

## ✅ What's Been Fixed

### 1. **Font Family Consistency** 
**Problem**: Website was using Arial instead of the imported Geist font
**Solution**: Changed global font-family from `Arial, Helvetica, sans-serif` to `var(--font-geist-sans)`

```diff
- font-family: Arial, Helvetica, sans-serif;
+ font-family: var(--font-geist-sans);
```

**Result**: Now using **1 primary font (Geist Sans)** + 1 monospace font (Geist Mono for code)

---

## 📐 Typography Scale (Now Standardized)

### Global Heading Sizes (in globals.css)

| Heading | Mobile | Tablet | Desktop | Laptop | Font-Weight | Tracking |
|---------|--------|--------|---------|--------|-------------|----------|
| **h1** | 2.25rem (36px) | 2.75rem (44px) | 3.5rem (56px) | 4rem (64px) | 900 | -0.045em |
| **h2** | 1.875rem (30px) | 2.5rem (40px) | 3rem (48px) | 3rem (48px) | 900 | -0.04em |
| **h3** | 1.5rem (24px) | 1.5rem (24px) | 1.5rem (24px) | 1.5rem (24px) | 700 | -0.02em |
| **h4** | 1.25rem (20px) | 1.25rem (20px) | 1.25rem (20px) | 1.25rem (20px) | 700 | 0 |
| **h5** | 1.125rem (18px) | 1.125rem (18px) | 1.125rem (18px) | 1.125rem (18px) | 600 | 0 |

### Paragraph Sizes

- **p** (default): 1rem (16px) | line-height: 1.6 | font-weight: 400
- **p.text-sm**: 0.875rem (14px) | line-height: 1.5
- **p.text-xs**: 0.75rem (12px) | line-height: 1.5

---

## 🎨 How to Use Going Forward

### ✅ DO - Recommended Approaches

```jsx
// 1. Use semantic HTML (best practice)
<h1>Page Title</h1>        // Auto uses standardized h1 size
<h2>Section Title</h2>     // Auto uses standardized h2 size
<p>Body text</p>           // Auto uses standardized p size

// 2. If you need custom sizing for specific designs, use Tailwind:
<h2 className="text-5xl font-black">Extra Large Heading</h2>
<p className="text-lg font-semibold">Emphasized text</p>
```

### ❌ DON'T - Avoid These

```jsx
// ❌ Don't override font-family inline
<h1 style={{ fontFamily: 'Arial' }}>Wrong</h1>

// ❌ Don't use inconsistent heading levels for styling
<div className="text-4xl">This should be an h2 or h3</div>

// ❌ Don't apply random font sizes to headings
<h2 className="text-6xl">Inconsistent Size</h2>
```

---

## 🔍 What About Tailwind Font-Size Classes?

**Important**: Tailwind classes like `text-3xl`, `text-4xl`, etc. will **override** global `<h1>` styling. This is intentional for design flexibility.

**Current State in Your Code**:
- Most pages use Tailwind classes for styling (e.g., `<h1 className="text-5xl font-black">`)
- This works fine and maintains custom designs
- **Font-family is now consistent across all** thanks to the global fix

---

## 📋 Checklist for Maintaining Consistency

When adding new pages or components:

- [ ] Use `var(--font-geist-sans)` or rely on global font inheritance
- [ ] Use semantic HTML (`<h1>`, `<h2>`, etc.) - never use `<div>` for headings
- [ ] Keep heading hierarchy logical (no h1 → h3 jumps)
- [ ] Use existing Tailwind sizing classes for consistency (text-4xl, text-5xl, etc.)
- [ ] Test on mobile (375px), tablet (768px), and desktop (1024px+)
- [ ] Verify dark mode works correctly

---

## 📁 Files Modified

- **src/app/globals.css**: Updated font-family + added global typography styles
- **src/app/layout.js**: No changes needed (Geist fonts already configured)

---

## 🚀 Next Steps (Optional Enhancements)

If you want even **more** consistency, consider:

1. **Create utility classes** for consistent spacing with headings:
   ```css
   .heading-1 { @apply text-5xl font-black tracking-[-0.05em]; }
   .heading-2 { @apply text-4xl font-black tracking-[-0.04em]; }
   ```

2. **Add to tailwind.config.js** (if you create one):
   ```js
   theme: {
     fontFamily: {
       sans: ['var(--font-geist-sans)'],
       mono: ['var(--font-geist-mono)'],
     }
   }
   ```

3. **Extract heading colors** into utility classes (since you use `text-[#8db800]` often)

---

## ✨ Summary

| Aspect | Before | After |
|--------|--------|-------|
| Font Family | Arial (2+ fonts) | Geist Sans (1 font) |
| h1 Sizes | 3xl to 7xl (inconsistent) | Standardized scale |
| h2 Sizes | 3xl to 5xl (inconsistent) | Standardized scale |
| h3-h5 Sizes | Mostly consistent | Now defined globally |
| Paragraphs | Various sizes | Standardized (1rem default) |
| Font Inheritance | Not working | ✅ Working globally |

---

**Questions?** Refer to [/memories/repo/typography-system.md](/memories/repo/typography-system.md) for quick reference.
