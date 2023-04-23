### TL;DR

* StarkNetの分散化には、ネイティブトークンと新しい基盤が含まれます。
* StarkNetトークンは、ガバナンスとネットワークの支払いとステーキング資産として使用されます。
* 100億のトークンが鋳造され、その割り当てが始まっています。
* StarkNet財団は現在設立されており、公共財としてStarkNetを維持する使命があります。

StarkNetは、EthereumがSTARKと呼ばれる暗号化プロトコルを介して拡張できるように構築された、権限のない分散レイヤ2(L2)有効ロールアップです。 分散化、透明性、包摂性、セキュリティというEthereumの中核的な原則を損なうことなく。

StarkNetのアルファは2021年11月にMainnetで発売されました。 1年も経たないうちにエコシステムが形成され、世界中の数十のチームがそれに取り組んでいます。 今はネットワークの分散化を進める時期なので、ライブネスを実現します。 検閲抵抗、透明性、包摂性がEthereumにL2に要求されました。

分散化は、ネットワークの運用と進化がStarkWareを含む単一のエンティティに依存しないことを意味します。 無許可証のステークリーダーの選挙メカニズムと取引手数料のチェーン上の支払いは、両方ともネイティブトークンを使用しています。 StarkWareが存在しなくなった場合でも、Ethereum上のL2としてネットワークが確実に動作するようになります。 StarkNetの継続的なメンテナンスに関する決定は、StarkWareからコミュニティに移行します。 StarkNetトークンと財団は、この努力の重要な要素になります。

この記事では、3つ同時に公開された最初の投稿で、これまでのStarkNetの旅をまとめ、StarkNetトークンとStarkNet財団を紹介します。 次の[ポスト](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)ではStarkNetガバナンスモデルについて説明し、[第3位](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)ではStarkNetのトークンモデルに焦点を当てています。

*以下のStarkNetサポーター(アルファベット順)にこれらの投稿のドラフトに関するコメントに感謝します: Guily_Gioza (トポロジー) Itamar Lesuisse(アルゼンチン)、Jonas Nelle(ポンティス)、Martin Triay(OpenZeppelin)、Polynya、Sylve Chevet(Briq)、Tomasz Stańczak(オランダ)。*

### これまでの話

[StarkNet](https://starknet.io/)は暗号とオープンなエコシステムから構築されています。 **cryptography**は**[STARKs](https://eprint.iacr.org/2018/046.pdf)**. これらは、Ethereumを桁違いにスケールする数学に基づくプロトコルです。 これらは信頼できるセットアップを必要とせず、ポスト量子セキュアであり、あらゆる規模で簡潔にデプロイすることができます。 エコシステムは、ブロックチェーン技術をスケーリングするためのインフラストラクチャとツールを構築するために何年も望んでいたコア開発者で構成されています。 Ethereumの計算能力が拡大すると可能になる新しい創造的なアプリケーション領域だけでなく。

StarkNet は、すべての開発者とユーザーが STARK の規模とセキュリティ上のメリットにアクセスできるようにします。 Ethereumのコア値を維持しながらEthereumをスケーリングするために。 STARKsはStarkWareの共同創業者によって発明されました。 彼らは最初にクライアントのための[StarkEx](https://starkware.co/starkex/)スケーリングソリューションを構築するためにそれらを使用しました。 その後、StarkWareと他の開発チーム（総称して「コアコントリビューター」）が[StarkNet](https://starkware.co/starknet/)を公開しました。 分散型でパーミッションレスなインフラストラクチャを使って、これらのスケーリング技術がすべての人が永続的にアクセスできるようにします。

StarkNet Alphaの発売は、StarkNetを構築し、育成することを約1年前に約束されているより大きなエコシステムの出現を促しました。 中核となるインフラストラクチャを構築している開発者のチームは世界中に数多く存在し、新しいアプリケーションも開発されています。

### **分散化の方法**

STARK技術は成熟していて安全ですが、StarkNetはEthereumやインターネットのような公共財の状態を達成していません。 StarkNetがこの目標を達成するためには、そのガバナンス、運用および開発が引き続き分散化されなければなりません。 これは、**StarkNet Foundation**と**StarkNet Token** の 2 つのメカニズムによって促進されます。

#### 財団情報

非営利団体として 財団の使命は、社会のすべてのメンバーが利用できる商品やサービスであるStarkNetを公共の利益として維持することです。 StarkNetは、すべての人が利用できる権限のないインフラストラクチャです。 公共の利用のために安全で効率的であるためには、十分に維持されなければなりません。 また、ユーザーを区別してはいけません。

財団はStarkNetトークンの一回限りの助成金によって資金を供給されます。 これは、プロトコルの更新、紛争解決、公共財の資金調達などの不可欠な技術的質問に関するコミュニティの意思決定のためのボトムアップメカニズムの開発を奨励する。

#### トークン

StarkNetトークンは、エコシステムを運用し、維持し、確保し、その価値と戦略目標を決定し、進化を導くために必要です。 このトークンは、(i) ガバナンス、(ii) StarkNet での取引手数料の支払、(iii) StarkNetのコンセンサスメカニズムへの参加に必要です。

StarkWareやStarkWareの投資家を含むStarkNetエコシステムのコア貢献者に割り当てられている最初の10億トークンを鋳造しました StarkNetソフトウェア開発者パートナー、および財団に。 すぐに(ターゲット:2022年9月)トークンはERC-20トークンとしてEthereumに移行し、ガバナンスとネットワークのアップグレードへの投票での使用を要求されます。 その後、StarkNetの手数料はこのトークンでのみ支払われ、ETHで手数料を支払うことに興味のあるユーザーにとって優れたユーザーエクスペリエンスを確保します。 その後も、追加のStarkNetトークンの自動鋳造が開始されます(すなわち、循環トークンの数は100億以上になります)。

StarkNetトークンモデルは、彼らの仕事に対する補償開発者を強調しています。 新しい鋳造料および取引手数料の一部(StarkNetの使用のために評価された手数料)は、プロトコルを設計および立ち上げるために行った仕事に対して、コアインフラストラクチャ開発者およびスマートコントラクト開発者に付与されます。 StarkNet事業者がそれを操作するために行った作業を補償することに加えて。

The full rationale behind a new and dedicated StarkNet Token is explained in our [second post](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), and the StarkNet Token design principles and initial allocation are discussed in the [third post](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6).