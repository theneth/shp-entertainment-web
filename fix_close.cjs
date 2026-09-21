const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

const target = `        </section>

        {/* TECH SHOWCASE SECTION (Section 4) */}`;

const replacement = `          </div>
        </section>

        {/* TECH SHOWCASE SECTION (Section 4) */}`;

code = code.replace(target, replacement);
fs.writeFileSync('src/App.jsx', code);
console.log('Fixed missing div.');
