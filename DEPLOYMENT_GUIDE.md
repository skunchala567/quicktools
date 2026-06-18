# 🚀 Deployment Guide - Live Site Update

## Current Live Site
**URL:** https://marketfarmer.in/

---

## 📋 Deployment Changes Required

Your live site has been reorganized. Here's what needs to be updated:

### ✅ Old URL Structure (Currently Live)
```
https://marketfarmer.in/tools/excel-tools/excel-merger.html
https://marketfarmer.in/tools/rfid-coupon.html
https://marketfarmer.in/tools/id-card-registration.html
etc.
```

### ✅ New URL Structure (After Update)
```
https://marketfarmer.in/public/tools-access.html          (Main hub)
https://marketfarmer.in/tools/excel-tools/excel-merger.html
https://marketfarmer.in/tools/rfid-management/rfid-coupon.html
https://marketfarmer.in/tools/id-card/id-card-registration.html
https://marketfarmer.in/tools/image-generator/image-url-generator.html
https://marketfarmer.in/tools/messaging/whatsapp.html
```

---

## 📂 Files to Deploy

### Delete from Live Server
- ❌ Delete old root-level files (they're now in folders):
  - `base-theme.js` → moved to `core/base-theme.js`
  - `base-theme.css` → moved to `core/base-theme.css`
  - `index.html` → moved to `public/index.html`
  - `rfid-coupon.html` → moved to `tools/rfid-management/`
  - `excel-merger.html` → moved to `tools/excel-tools/`
  - `id-card-registration.html` → moved to `tools/id-card/`
  - `image-url-generator.html` → moved to `tools/image-generator/`
  - `whatsapp.html` → moved to `tools/messaging/`

### Upload New Folders
- ✅ `core/` - New folder with shared files
- ✅ `public/` - New folder with entry points
- ✅ `tools/` - Reorganized tools
  - `rfid-management/` (new structure)
  - `excel-tools/` (reorganized)
  - `id-card/` (new)
  - `image-generator/` (reorganized)
  - `messaging/` (reorganized)

### Upload Documentation
- ✅ All `.md` and `.txt` files (optional, for reference)
- ✅ `.json` files (optional, for reference)

---

## 🔄 Deployment Steps

### Step 1: Backup Current Live Site
```bash
# Download current live files as backup
# Or create a backup on your server before proceeding
```

### Step 2: Delete Old Files from Live Server
Using FTP/SSH/Panel, delete these files from root:
```
/base-theme.js
/base-theme.css
/index.html
/rfid-coupon.html
/excel-merger.html
/image-url-generator.html
/whatsapp.html
(Keep: /tools/ folder - we'll update it)
```

### Step 3: Upload New Folder Structure
Upload these folders to your live server:
```
/core/                    (new)
/public/                  (new)
/tools/                   (reorganized)
```

### Step 4: Update .htaccess (If Apache)
Add these redirects to `.htaccess` in your root:

```apache
# Redirect old direct URLs to new locations
Redirect 301 /excel-merger.html /tools/excel-tools/excel-merger.html
Redirect 301 /rfid-coupon.html /tools/rfid-management/rfid-coupon.html
Redirect 301 /id-card-registration.html /tools/id-card/id-card-registration.html
Redirect 301 /image-url-generator.html /tools/image-generator/image-url-generator.html
Redirect 301 /whatsapp.html /tools/messaging/whatsapp.html

# Redirect root to tools hub
Redirect 301 /index.html /public/tools-access.html
Redirect 301 / /public/tools-access.html
```

### Step 5: Verify Live URLs
Test these URLs on your live site:
```
✅ https://marketfarmer.in/public/tools-access.html
✅ https://marketfarmer.in/tools/excel-tools/excel-merger.html
✅ https://marketfarmer.in/tools/rfid-management/rfid-coupon.html
✅ https://marketfarmer.in/tools/id-card/id-card-registration.html
✅ https://marketfarmer.in/tools/image-generator/image-url-generator.html
✅ https://marketfarmer.in/tools/messaging/whatsapp.html
```

### Step 6: Update Bookmarks/Links
Update any bookmarks, links, or references to old URLs

---

## 🔗 New Direct URLs (After Deployment)

```
🔄 Mess Management (RFID)
   https://marketfarmer.in/tools/rfid-management/rfid-coupon.html

🎫 ID Cards
   https://marketfarmer.in/tools/id-card/id-card-registration.html

📸 Image URLs
   https://marketfarmer.in/tools/image-generator/image-url-generator.html

💬 WhatsApp
   https://marketfarmer.in/tools/messaging/whatsapp.html

📊 Excel Merger
   https://marketfarmer.in/tools/excel-tools/excel-merger.html

🌟 Tools Hub (Main Entry Point)
   https://marketfarmer.in/public/tools-access.html
```

---

## 🖥️ Server Type Specific Instructions

### If Using Apache
Create/Update `.htaccess` in root with redirects (see Step 4 above)

### If Using Nginx
Add to your nginx.conf:
```nginx
location = / {
    return 301 /public/tools-access.html;
}

location /excel-merger.html {
    return 301 /tools/excel-tools/excel-merger.html;
}

location /rfid-coupon.html {
    return 301 /tools/rfid-management/rfid-coupon.html;
}

# Add more redirects as needed
```

### If Using cPanel/Hosting Panel
1. Login to your hosting panel
2. Use File Manager to upload new folders
3. Delete old files
4. Add redirects in Redirects section (if available)

### If Using GitHub Pages
Push to GitHub and GitHub will automatically deploy

### If Using Vercel/Netlify
1. Push changes to your repository
2. These services auto-deploy on push
3. URL structure remains the same

---

## ✅ Post-Deployment Checklist

- [ ] New folders uploaded (`core/`, `public/`, `tools/`)
- [ ] Old files deleted from root
- [ ] `.htaccess` redirects added (if Apache)
- [ ] All new URLs tested and working
- [ ] Old URLs redirect to new ones
- [ ] Sidebar is removed (full-width layout works)
- [ ] Tools are accessible and functional
- [ ] CSS/JS files loading correctly
- [ ] Theme switching works
- [ ] Mobile responsive design works
- [ ] Excel merger features work
- [ ] Tools access hub page displays correctly

---

## 🔄 Rollback Plan

If something goes wrong:

1. **Restore from Backup**
   - Restore previous backup files
   - Wait 15-30 minutes for DNS cache to clear

2. **Disable Redirects**
   - Comment out `.htaccess` redirects
   - Restore old file structure

3. **Re-push from Git**
   - Run: `git revert HEAD` to undo changes
   - Deploy previous version

---

## 📞 Troubleshooting

### Issue: 404 errors after deployment
**Solution:**
- Verify all folders are uploaded correctly
- Check file permissions (should be 644 for files, 755 for folders)
- Verify `.htaccess` is in root directory

### Issue: Styles not loading (blank page)
**Solution:**
- Clear browser cache (Ctrl+Shift+Del)
- Verify `core/base-theme.css` is uploaded
- Check developer console (F12) for CSS errors
- Verify relative paths in stylesheets

### Issue: Old URLs not redirecting
**Solution:**
- Check `.htaccess` is properly configured
- Ensure `mod_rewrite` is enabled on server
- Wait for DNS cache to clear (up to 24 hours)
- Test in incognito/private browser window

### Issue: Tools not working after deployment
**Solution:**
- Clear browser cache
- Check browser console for errors
- Verify all JavaScript files are uploaded
- Check file permissions

---

## 📊 Deployment Summary

| Item | Old Location | New Location |
|------|--------------|--------------|
| Shared styles | `/base-theme.css` | `/core/base-theme.css` |
| Shared scripts | `/base-theme.js` | `/core/base-theme.js` |
| Home page | `/index.html` | `/public/index.html` |
| Tools hub | N/A | `/public/tools-access.html` |
| Excel Merger | `/excel-merger.html` | `/tools/excel-tools/excel-merger.html` |
| RFID Coupon | `/rfid-coupon.html` | `/tools/rfid-management/rfid-coupon.html` |
| ID Cards | `/id-card-registration.html` | `/tools/id-card/id-card-registration.html` |
| Image Generator | `/image-url-generator.html` | `/tools/image-generator/image-url-generator.html` |
| WhatsApp | `/whatsapp.html` | `/tools/messaging/whatsapp.html` |

---

## 🚀 You're Ready to Deploy!

All files are organized and ready. Follow the steps above to update your live site.

**Remember:**
✅ Backup first  
✅ Upload new structure  
✅ Delete old files  
✅ Add redirects  
✅ Test all URLs  
✅ Verify functionality  

**Good luck! Your live site will be updated and better organized!** 🎉
