# VuexのDocker環境
[自宅PCでのDocker起動]
sudo service docker start
docker-compose up

[コンテナへのログイン]
docker exec -it Vuex_App_Iroiro bash

[vueプロジェクト作成]
vue create iroiro_app
vue create increment_vuex_app
vue create memo_app
vue create sap_app

[Kanban]
cd kanban_app_vuex
yarn serve
[increment_vuex_app]
cd increment_vuex_app
yarn serve

[memo_app]
cd memo_app
yarn serve

<localhost:5555>

[カンバンアプリ_メモ]
画面はAtomicDesignにしたがって作成

- Atoms: UIを構成するための基本的要素であり、これ以上分割できないもの。(ラベル/テキストボックス/ボタン/アイコン)
- Molecules: Atomsを組み合わせて作られた要素(ログインフォーム/ボードナビゲーション/タスクリストヘッダー/タスクフォーム/タスクカード/タスク詳細フォーム)
- Organisms: Atoms及びMolecules、Organismsを組み合わせて作られた要素
- Templates: MoleculesやOrganismsを組み合わせて、Pageのテンプレートになる要素
- Pages: ページにコンテンツを入れたもの	(デザインカンプ)

上記の要素でsrc/components配下のディレクトリを区切り見やすい構造でvueファイルを配置していく

- src/components/atoms/
- src/components/molecules/
- src/components/organisms/
- src/components/templates/

```
ls -l src/components/
mkdir atoms molecules organisms templates
echo "atoms配下"
touch src/components/atoms/Kbn{Button,Icon}.vue
touch src/components/molecules/Kbn{LoginForm,BoardNavigation,TaskListHeader,KbnTaskForm,TaskCard,TaskDetailForm}.vue
touch src/components/organisms/Kbn{BoardTask,TaskList}.vue
touch src/components/templates/Kbn{LoginView,BoardView,TaskDetailModal}.vue
```


## package.json のライブラリ

- @nuxtjs/axios
- @nuxtjs/style-resources
- @nuxtjs/vuetify
- aigle
- body-parser
- chart.js
- chartjs-plugin-colorschemes
- chartjs-plugin-datalabels
- chartjs-plugin-waterfall
- cross-env
- express
- express-session
- js-cookie
- lodash
- moment
- node-sass
- nuxt
- simple-statistics
- vue-chartjs
- vuedraggable
- vuex-persistedstate
- whatwg-fetch

## `v-`コンポーネント要素

v-alert
v-app
v-app-bar
v-app-bar-nav-icon
v-avatar
v-badge
v-bottom-sheet
v-btn
v-card
v-card-actions
v-card-text
v-card-title
v-cardnuxt
v-carousel
v-carousel-item
v-checkbox
v-chip
v-col
v-container
v-content
v-data-iterator
v-data-table
v-date-picker
v-dialog
v-expansion-panel
v-expansion-panel-content
v-expansion-panel-header
v-expansion-panels
v-flex
v-form
v-icon
v-img
v-item
v-item-group
v-layout
v-list
v-list-item
v-list-item-action
v-list-item-avatar
v-list-item-content
v-list-item-group
v-list-item-icon
v-list-item-subtitle
v-list-item-title
v-menu
v-navigation-drawer
v-radio
v-radio-group
v-row
v-select
v-sheet
v-sheetcolor=
v-simple-table
v-spacer
v-subheader
v-switch
v-system-bar
v-tab
v-tab-item
v-tabs
v-tabs-items
v-text-field
v-textarea
v-timeline
v-timeline-item
v-title
v-toolbar
v-toolbar-items
v-toolbar-title
v-tooltip
v-window
v-window-item

