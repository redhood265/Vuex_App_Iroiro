# VuexのDocker環境
[自宅PCでのDocker起動]
sudo service docker start
docker-compose up

[コンテナへのログイン]
docker exec -it Vuex_App_Iroiro bash

[vueプロジェクト作成]
vue create iroiro_app
vue create increment_vuex_app

[Kanban]
cd kanban_app_vuex
yarn serve
[increment_vuex_app]
cd increment_vuex_app
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
